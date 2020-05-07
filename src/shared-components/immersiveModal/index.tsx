import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';

import keyboardKeys from '../../constants/keyboardKeys';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  ModalContainer,
  CloseButtonContainer,
  HeaderImageContainer,
  ContentWithFooterContainer,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from './style';

type ImmersiveModalProps = {
  children: React.ReactNode;
  headerImage?: React.ReactNode;
  footerContent?: React.ReactNode;
  onClose: () => void;
  title?: string;
};

export const reactPortalSectionId = '#reactPortalSection';

class ImmersiveModal extends React.Component<
  ImmersiveModalProps,
  { isClosing: boolean }
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
  };

  htmlNode: HTMLElement;

  domNode: HTMLElement;

  constructor(props: ImmersiveModalProps) {
    super(props);

    this.htmlNode = document.querySelector('html') || document.body;

    this.domNode =
      document.querySelector(reactPortalSectionId) || document.body;
  }

  componentDidMount(): void {
    this.htmlNode.classList.add('no-scroll');

    document
      .getElementsByTagName('body')[0]
      .addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount(): void {
    this.htmlNode.classList.remove('no-scroll');

    document
      .getElementsByTagName('body')[0]
      .removeEventListener('keydown', this.handleEscapeKey);
  }

  handleCloseIntent = (): void => {
    const { onClose } = this.props;
    this.setState({ isClosing: true });

    setTimeout(onClose, 4100);
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

    const { isClosing } = this.state;

    return ReactDOM.createPortal(
      <Transition
        timeout={{
          appear: 0,
          enter: 0,
          exit: 4000,
        }}
        in={!isClosing}
        unmountOnExit
        appear
      >
        {(transitionState): JSX.Element => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Overlay className={transitionState} {...rest}>
            <OffClickWrapper onOffClick={this.handleCloseIntent}>
              {/* <ModalScrollingHeaderBar>DIEGO</ModalScrollingHeaderBar> */}
              <ModalContainer className={transitionState}>
                <CloseButtonContainer onClick={this.handleCloseIntent}>
                  <CrossIcon />
                </CloseButtonContainer>
                {headerImage && (
                  <HeaderImageContainer>{headerImage}</HeaderImageContainer>
                )}
                <ContentWithFooterContainer hasHeaderImage={!!headerImage}>
                  <ModalBody>
                    {!!title && <ModalTitle>{title}</ModalTitle>}
                    {children}
                  </ModalBody>
                  {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
                </ContentWithFooterContainer>
              </ModalContainer>
            </OffClickWrapper>
          </Overlay>
        )}
      </Transition>,
      this.domNode,
    );
  }
}

export default ImmersiveModal;
