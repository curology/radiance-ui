import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import keyboardKeys from '../../constants/keyboardKeys';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  ModalContainer,
  CloseButtonContainer,
  HeaderImageContainer,
  Title,
  Body,
  Footer,
  ContentWithFooterContainer,
} from './style';

type ImmersiveModalProps = {
  children: React.ReactNode;
  headerImage: React.ReactNode;
  footerContent: React.ReactNode;
  onClose: () => void;
  scrollContainerId: string;
};

export const reactPortalSectionId = '#reactPortalSection';

class ImmersiveModal extends React.Component<ImmersiveModalProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerImage: PropTypes.node,
    footerContent: PropTypes.node,
    onClose: PropTypes.func,
    scrollContainerId: PropTypes.string,
  };

  static defaultProps = {
    headerImage: null,
    footerContent: null,
    onClose: (): void => undefined,
    scrollContainerId: 'modalScrollContainer',
  };

  static Title = Title;

  static Body = Body;

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

  handleEscapeKey = (event: KeyboardEvent): void => {
    const { onClose } = this.props;

    if (keyPressMatch(event, keyboardKeys.escape)) {
      onClose();
    }
  };

  render(): JSX.Element {
    const {
      children,
      onClose,
      headerImage,
      footerContent,
      scrollContainerId,
      ...rest
    } = this.props;
    return ReactDOM.createPortal(
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Overlay {...rest}>
        <OffClickWrapper onOffClick={onClose}>
          <ModalContainer id={scrollContainerId}>
            <CloseButtonContainer onClick={onClose}>
              <CrossIcon />
            </CloseButtonContainer>
            {headerImage && (
              <HeaderImageContainer>{headerImage}</HeaderImageContainer>
            )}
            <ContentWithFooterContainer>
              <div>{children}</div>
              {footerContent && <Footer>{footerContent}</Footer>}
            </ContentWithFooterContainer>
          </ModalContainer>
        </OffClickWrapper>
      </Overlay>,
      this.domNode,
    );
  }
}

export default ImmersiveModal;
