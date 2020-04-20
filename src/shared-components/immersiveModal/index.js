import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import { RoundButton } from '../button';
import KEYCODES from '../../constants/keycodes';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  ModalContainer,
  Overlay,
  CloseIconContainer,
  CopyContainer,
  Title,
  Body,
  Footer,
} from './style';

class ImmersiveModal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    canBeClosed: PropTypes.bool,
    onClose: PropTypes.func,
    header: PropTypes.node,
    scrollContainerId: PropTypes.string,
  };

  static defaultProps = {
    header: null,
    canBeClosed: true,
    onClose: () => undefined,
    scrollContainerId: 'modalScrollContainer',
  };

  static Title = Title;

  static Body = Body;

  static Footer = Footer;

  constructor(props) {
    super(props);

    this.htmlNode = document.querySelector('html');
    this.domNode =
      document.querySelector('#reactPortalSection') || document.body;
  }

  componentDidMount() {
    this.htmlNode.classList.add('no-scroll');

    document
      .getElementsByTagName('body')[0]
      .addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    this.htmlNode.classList.remove('no-scroll');

    document
      .getElementsByTagName('body')[0]
      .removeEventListener('keydown', this.handleEscapeKey);
  }

  handleEscapeKey = event => {
    if (keyPressMatch(event, KEYCODES.escape)) {
      this.closeModal();
    }
  };

  closeModal = () => {
    const { canBeClosed, onClose } = this.props;
    if (canBeClosed) {
      onClose();
    }
  };

  render() {
    const {
      children,
      canBeClosed,
      onClose,
      header,
      scrollContainerId,
      ...rest
    } = this.props;
    return ReactDOM.createPortal(
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Overlay {...rest}>
        <ModalContainer id={scrollContainerId}>
          <OffClickWrapper onOffClick={this.closeModal}>
            {canBeClosed && (
              <CloseIconContainer>
                <RoundButton
                  buttonType="action"
                  icon={<CrossIcon />}
                  onClick={onClose}
                />
              </CloseIconContainer>
            )}
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
