import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { FocusScope } from '@react-aria/focus';

import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  ModalContainer,
  ModalTitle,
  CrossIconContainer,
} from './style';

type DialogModalProps = {
  /**
   * Dialog Modal content.
   * Must contain at least 1 button and is responsible for closing the modal.
   */
  children: React.ReactNode;
  /**
   * If provided, DialogModal displays a Close Icon positioned top-right.
   * This function must contain the logic for closing the modal.
   */
  onCloseIconClick?: () => void | null;
  title?: string;
  [key: string]: any;
};

type DialogModalState = {
  isClosing: boolean;
};

const reactPortalSectionId = '#reactPortalSection';

/**
 * Dialog modals shouldn't contain large content and should not scroll unless screen size dictates it. To display large amounts of content, use `Immersive modal` instead.
 *
 * Dialog modals require a user to make a choice between options and are not closable on click/tap outside. They may contain a close button if a close function is provided.
 *
 * Dialog Modals should always contain at least 1 button and the logic should close the modal at some point.
 */
export class DialogModal extends React.Component<
  DialogModalProps,
  DialogModalState
> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onCloseIconClick: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    onCloseIconClick: null,
    title: '',
  };

  state = {
    isClosing: false,
  };

  htmlNode: HTMLElement;

  domNode: HTMLElement;

  constructor(props: DialogModalProps) {
    super(props);

    this.htmlNode = document.querySelector('html') || document.body;

    this.domNode =
      document.querySelector(reactPortalSectionId) || document.body;
  }

  componentDidMount(): void {
    this.htmlNode.classList.add('no-scroll');
  }

  componentWillUnmount(): void {
    this.htmlNode.classList.remove('no-scroll');
  }

  handleCloseIntent = (): void => {
    const { onCloseIconClick } = this.props as Required<DialogModalProps>;

    if (onCloseIconClick) {
      this.setState({ isClosing: true });
      setTimeout(onCloseIconClick, 350);
    }
  };

  handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.handleCloseIntent();
    }
  };

  render(): JSX.Element {
    const {
      children, title, onCloseIconClick, ...rest 
    } = this
      .props as Required<DialogModalProps>;
    const { isClosing } = this.state;

    return ReactDOM.createPortal(
      <Transition
        timeout={{
          appear: 0,
          enter: 0,
          exit: 250,
        }}
        in={!isClosing}
        unmountOnExit
        appear
      >
        {(transitionState): JSX.Element => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Overlay className={transitionState} {...rest}>
            <FocusScope contain restoreFocus autoFocus>
              <ModalContainer
                className={transitionState}
                onKeyDown={this.handleKeyDown}
              >
                {onCloseIconClick && (
                  <CrossIconContainer
                    onClick={this.handleCloseIntent}
                    role="button"
                    tabIndex={0}
                    aria-label="Close modal"
                  >
                    <CrossIcon />
                  </CrossIconContainer>
                )}
                {!!title && <ModalTitle>{title}</ModalTitle>}
                {children}
              </ModalContainer>
            </FocusScope>
          </Overlay>
        )}
      </Transition>,
      this.domNode,
    );
  }
}

export default DialogModal;
