import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { Global } from '@emotion/core';

import { RoundButton } from '../button';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import keyPressMatch from '../../utils/keyPressMatch';
import keyboardKeys from '../../constants/keyboardKeys';
import {
  ModalOverlay,
  ModalBox,
  ModalCloseIcon,
  ContentContainer,
  Title,
  Body,
  Footer,
} from './style';

class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    canBeClosed: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    onClose: () => undefined,
    isOpen: false,
    className: '',
    children: '',
    canBeClosed: true,
  };

  static ContentContainer = ContentContainer;

  static Title = Title;

  static Body = Body;

  static Footer = Footer;

  state = {
    isVisible: false,
    parentNode: document.querySelector('#reactPortalSection') || document.body,
  };

  UNSAFE_componentWillMount() {
    const el = document.querySelector('#reactPortalSection')
      ? '#reactPortalSection'
      : 'body';
    ReactModal.setAppElement(el);
  }

  componentDidMount() {
    document
      .getElementsByTagName('body')[0]
      .addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    document
      .getElementsByTagName('body')[0]
      .removeEventListener('keydown', this.handleEscapeKey);
  }

  // eslint-disable-next-line react/destructuring-assignment
  getParent = () => this.state.parentNode;

  handleEscapeKey = event => {
    if (keyPressMatch(event, keyboardKeys.escape)) {
      this.closeModal();
    }
  };

  afterOpen = () => this.setState({ isVisible: true });

  requestClose = () => this.setState({ isVisible: false });

  stopPropagation = event => event.stopPropagation();

  closeModal = () => {
    const { onClose, canBeClosed } = this.props;
    if (canBeClosed) {
      this.setState({ isVisible: false });
      onClose();
    }
  };

  render() {
    const { isVisible } = this.state;
    const {
      isOpen, children, className, canBeClosed, 
    } = this.props;

    return (
      <React.Fragment>
        <Global
          styles={{
            '.ReactModalPortal': {
              position: 'relative',
              zIndex: 99999999,
            },
          }}
        />
        <ReactModal
          className={`prevent-default ${className}`}
          contentLabel="Modal"
          isOpen={isOpen}
          onAfterOpen={this.afterOpen}
          onRequestClose={this.requestClose}
          parentSelector={this.getParent}
        >
          <ModalOverlay
            isVisible={isVisible}
            canBeClosed={canBeClosed}
            onClick={this.closeModal}
            id="modal-overlay"
          >
            <ModalBox isVisible={isVisible} onClick={this.stopPropagation}>
              {canBeClosed && (
                <ModalCloseIcon>
                  <RoundButton
                    buttonType="action"
                    icon={<CrossIcon />}
                    onClick={this.closeModal}
                  />
                </ModalCloseIcon>
              )}
              {children}
            </ModalBox>
          </ModalOverlay>
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default Modal;
