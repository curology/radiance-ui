import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import { Overlay, ModalContainer, ModalTitle } from './style';

type DialogModalProps = {
  children: React.ReactNode;
  title?: string;
};

export const reactPortalSectionId = '#reactPortalSection';

class DialogModal extends React.Component<DialogModalProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  htmlNode: HTMLElement;

  domNode: HTMLElement;

  modalMobileScrollingElement: HTMLElement | null = null;

  modalDesktopScrollingElement: HTMLElement | null = null;

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

  render(): JSX.Element {
    const { children, title, ...rest } = this.props;

    return ReactDOM.createPortal(
      <Transition timeout={350} in unmountOnExit appear>
        {(transitionState): JSX.Element => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Overlay className={transitionState} {...rest}>
            <ModalContainer className={transitionState}>
              {!!title && <ModalTitle>{title}</ModalTitle>}
              {children}
            </ModalContainer>
          </Overlay>
        )}
      </Transition>,
      this.domNode,
    );
  }
}

export default DialogModal;
