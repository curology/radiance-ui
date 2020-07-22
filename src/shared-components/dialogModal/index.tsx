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
  children: React.ReactNode;
  onCloseIconClick?: () => void | null;
  title?: string;
};

type DialogModalState = {
  isClosing: boolean;
};

const reactPortalSectionId = '#reactPortalSection';

class DialogModal extends React.Component<DialogModalProps, DialogModalState> {
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
    const { onCloseIconClick } = this.props;

    if (onCloseIconClick) {
      this.setState({ isClosing: true });
      setTimeout(onCloseIconClick, 350);
    }
  };

  render(): JSX.Element {
    const {
      children, title, onCloseIconClick, ...rest 
    } = this.props;

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
            <FocusScope contain autoFocus restoreFocus>
              <ModalContainer className={transitionState}>
                {onCloseIconClick && (
                  <CrossIconContainer onClick={this.handleCloseIntent}>
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
