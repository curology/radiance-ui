import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import OffClickWrapper from '../offClickWrapper';
import CloseIcon from '../../svgs/icons/close-icon.svg';
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
  };

  static defaultProps = {
    canBeClosed: true,
    onClose: () => {},
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
  }

  componentWillUnmount() {
    this.htmlNode.classList.remove('no-scroll');
  }

  onOffClick = () => {
    const { canBeClosed, onClose } = this.props;
    if (canBeClosed) {
      onClose();
    }
  };

  render() {
    const {
      children, canBeClosed, onClose, header, 
    } = this.props;
    return ReactDOM.createPortal(
      <Overlay>
        <ModalContainer>
          <OffClickWrapper onOffClick={this.onOffClick}>
            {canBeClosed && (
              <CloseIconContainer onClick={onClose}>
                <CloseIcon />
              </CloseIconContainer>
            )}
            {header}
            <CopyContainer>{children}</CopyContainer>
          </OffClickWrapper>
        </ModalContainer>
      </Overlay>,
      this.domNode
    );
  }
}

export default ImmersiveModal;
