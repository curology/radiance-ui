import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import throttle from 'lodash.throttle';

import keyboardKeys from '../../constants/keyboardKeys';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  MobileHeaderBar,
  ModalContainer,
  MobileTopOverlay,
  CrossIconContainer,
  HeaderImageContainer,
  ContentWithFooterContainer,
  ModalTitle,
  ModalBody,
  ModalFooter,
  MainModalContentContainer,
} from './style';

type ImmersiveModalProps = {
  children: React.ReactNode;
  headerImage?: React.ReactNode;
  footerContent?: React.ReactNode;
  onClose: () => void;
  title?: string;
};

type ImmersiveModalState = {
  isClosing: boolean;
  showMobileHeaderBar: boolean;
};

export const reactPortalSectionId = '#reactPortalSection';

class ImmersiveModal extends React.Component<
  ImmersiveModalProps,
  ImmersiveModalState
> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerImage: PropTypes.node,
    footerContent: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    headerImage: null,
    footerContent: null,
    title: '',
  };

  state = {
    isClosing: false,
    showMobileHeaderBar: false,
  };

  htmlNode: HTMLElement;

  domNode: HTMLElement;

  modalScrollingElement: HTMLElement | null = null;

  constructor(props: ImmersiveModalProps) {
    super(props);

    this.htmlNode = document.querySelector('html') || document.body;

    this.domNode =
      document.querySelector(reactPortalSectionId) || document.body;
  }

  componentDidMount(): void {
    this.htmlNode.classList.add('no-scroll');

    this.modalScrollingElement = document.querySelector('#modal-scrolling-id');

    if (this.modalScrollingElement) {
      this.modalScrollingElement.addEventListener('scroll', this.handleScroll);
    }

    document
      .getElementsByTagName('body')[0]
      .addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount(): void {
    this.htmlNode.classList.remove('no-scroll');

    if (this.modalScrollingElement) {
      this.modalScrollingElement.removeEventListener(
        'scroll',
        this.handleScroll,
      );
    }

    document
      .getElementsByTagName('body')[0]
      .removeEventListener('keydown', this.handleEscapeKey);
  }

  handleScroll = throttle(() => {
    if (this.modalScrollingElement) {
      const showMobileHeaderBar = this.modalScrollingElement.scrollTop > 32;
      this.setState({ showMobileHeaderBar });
    }
  }, 100);

  handleCloseIntent = (): void => {
    const { onClose } = this.props;
    this.setState({ isClosing: true, showMobileHeaderBar: false });

    setTimeout(onClose, 450);
  };

  handleEscapeKey = (event: KeyboardEvent): void => {
    if (keyPressMatch(event, keyboardKeys.escape)) {
      this.handleCloseIntent();
    }
  };

  render(): JSX.Element {
    const {
      children,
      headerImage,
      footerContent,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClose,
      title,
      ...rest
    } = this.props;

    const { isClosing, showMobileHeaderBar } = this.state;

    return ReactDOM.createPortal(
      <Transition
        timeout={{
          appear: 0,
          enter: 0,
          exit: 350,
        }}
        in={!isClosing}
        unmountOnExit
        appear
      >
        {(transitionState): JSX.Element => (
          <React.Fragment>
            <MobileHeaderBar showMobileHeaderBar={showMobileHeaderBar}>
              {title}
              <CrossIconContainer onClick={this.handleCloseIntent}>
                <CrossIcon />
              </CrossIconContainer>
            </MobileHeaderBar>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Overlay className={transitionState} {...rest}>
              <ModalContainer
                className={transitionState}
                id="modal-scrolling-id"
              >
                <OffClickWrapper onOffClick={this.handleCloseIntent}>
                  <MobileTopOverlay onClick={this.handleCloseIntent} />
                  <MainModalContentContainer>
                    <CrossIconContainer onClick={this.handleCloseIntent}>
                      <CrossIcon />
                    </CrossIconContainer>
                    {headerImage && (
                      <HeaderImageContainer>{headerImage}</HeaderImageContainer>
                    )}
                    <ContentWithFooterContainer hasHeaderImage={!!headerImage}>
                      <ModalBody>
                        {!!title && <ModalTitle>{title}</ModalTitle>}
                        {children}
                      </ModalBody>
                      {footerContent && (
                        <ModalFooter>{footerContent}</ModalFooter>
                      )}
                    </ContentWithFooterContainer>
                  </MainModalContentContainer>
                </OffClickWrapper>
              </ModalContainer>
            </Overlay>
          </React.Fragment>
        )}
      </Transition>,
      this.domNode,
    );
  }
}

export default ImmersiveModal;
