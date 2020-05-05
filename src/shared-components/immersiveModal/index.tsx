import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { RoundButton } from '../button';
import keycodes from '../../constants/keycodes';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  ModalContainer,
  CloseIconContainer,
  CopyContainer,
  Title,
  Body,
  Footer,
} from './style';

type ImmersiveModalProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  onClose: () => void;
  scrollContainerId: string;
};

export const reactPortalSectionId = '#reactPortalSection';

class ImmersiveModal extends React.Component<ImmersiveModalProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    onClose: PropTypes.func,
    scrollContainerId: PropTypes.string,
  };

  static defaultProps = {
    header: null,
    onClose: (): void => undefined,
    scrollContainerId: 'modalScrollContainer',
  };

  static Title = Title;

  static Body = Body;

  static Footer = Footer;

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

    if (keyPressMatch(event, keycodes.escape)) {
      onClose();
    }
  };

  render(): JSX.Element {
    const {
      children,
      onClose,
      header,
      scrollContainerId,
      ...rest
    } = this.props;
    return ReactDOM.createPortal(
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Overlay {...rest}>
        <ModalContainer id={scrollContainerId}>
          <OffClickWrapper onOffClick={onClose}>
            <CloseIconContainer>
              {/* 
                // @ts-ignore, TODO-TS: Convert Button to TS */}
              <RoundButton
                buttonType="action"
                icon={<CrossIcon />}
                data-test-id="modal-close-icon-button"
                onClick={onClose}
              />
            </CloseIconContainer>
            {header}
            <CopyContainer>{children}</CopyContainer>
          </OffClickWrapper>
        </ModalContainer>
      </Overlay>,
      this.domNode,
    );
  }
}

export default ImmersiveModal;
