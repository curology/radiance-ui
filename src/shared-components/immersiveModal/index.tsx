import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import throttle from 'lodash.throttle';
import { FocusScope } from '@react-aria/focus';

import keyboardKeys from '../../constants/keyboardKeys';
import keyPressMatch from '../../utils/keyPressMatch';
import OffClickWrapper from '../offClickWrapper';
import CrossIcon from '../../svgs/icons/cross-icon.svg';
import {
  Overlay,
  MobileHeaderBar,
  DesktopHeaderBar,
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
import CrossIconComponent from './crossIconComponent';

type ImmersiveModalProps = {
  children: React.ReactNode;
  headerImage?: React.ReactNode;
  footerContent?: React.ReactNode;
  onClose: () => void;
  title?: string;
  [key: string]: unknown;
};

const REACT_PORTAL_SECTION_ID = 'reactPortalSection';
const MODAL_MOBILE_SCROLLING_ID = 'modal-mobile-scrolling-id';
const MODAL_DESKTOP_SCROLLING_ID = 'modal-desktop-scrolling-id';

const getHtmlRef = () => document.querySelector('html') || document.body;
const getDomNode = () =>
  (document.getElementById(REACT_PORTAL_SECTION_ID) as HTMLElement) ||
  document.body;
const getModalMobileScrollingElement = () =>
  document.getElementById(MODAL_MOBILE_SCROLLING_ID) as HTMLElement;
const getModalDesktopScrollingElement = () =>
  document.getElementById(MODAL_DESKTOP_SCROLLING_ID) as HTMLElement;

const ImmersiveModal = ({
  children,
  footerContent = null,
  headerImage = null,
  onClose,
  title = '',
  ...rest
}: ImmersiveModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showMobileHeaderBar, setShowMobileHeaderBar] = useState(false);
  const [showDesktopHeaderBar, setShowDesktopHeaderBar] = useState(false);

  const htmlNode = useRef<HTMLElement>(getHtmlRef());
  const domNode = useRef<HTMLElement>(getDomNode());
  const modalMobileScrollingElement = useRef<HTMLElement | null>(
    getModalMobileScrollingElement(),
  );
  const modalDesktopScrollingElement = useRef<HTMLElement | null>(
    getModalDesktopScrollingElement(),
  );

  const handleScroll = throttle(() => {
    if (modalMobileScrollingElement.current) {
      const shouldShowMobileHeaderBar =
        modalMobileScrollingElement.current.scrollTop > 32;
      setShowMobileHeaderBar(shouldShowMobileHeaderBar);
    }
    if (modalDesktopScrollingElement.current) {
      const shouldShowDesktopHeaderBar =
        modalDesktopScrollingElement.current.scrollTop > 32;
      setShowDesktopHeaderBar(shouldShowDesktopHeaderBar);
    }
  }, 100);

  const handleCloseIntent = () => {
    setIsClosing(true);
    setShowMobileHeaderBar(false);
    setTimeout(onClose, 450);
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (keyPressMatch(event, keyboardKeys.escape)) {
      handleCloseIntent();
    }
  };

  useEffect(() => {
    htmlNode.current = getHtmlRef();
    domNode.current = getDomNode();
    modalMobileScrollingElement.current = getModalMobileScrollingElement();
    modalDesktopScrollingElement.current = getModalDesktopScrollingElement();

    htmlNode.current.classList.add('no-scroll');

    if (
      modalMobileScrollingElement.current &&
      modalDesktopScrollingElement.current
    ) {
      modalMobileScrollingElement.current.addEventListener(
        'scroll',
        handleScroll,
      );
      modalDesktopScrollingElement.current.addEventListener(
        'scroll',
        handleScroll,
      );
    }

    document
      .getElementsByTagName('body')[0]
      .addEventListener('keydown', handleEscapeKey);

    return () => {
      htmlNode.current.classList.remove('no-scroll');

      if (
        modalMobileScrollingElement.current &&
        modalDesktopScrollingElement.current
      ) {
        modalMobileScrollingElement.current.removeEventListener(
          'scroll',
          handleScroll,
        );
        modalDesktopScrollingElement.current.removeEventListener(
          'scroll',
          handleScroll,
        );
      }

      document
        .getElementsByTagName('body')[0]
        .removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

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
            <CrossIconContainer onClick={handleCloseIntent}>
              <CrossIcon />
            </CrossIconContainer>
          </MobileHeaderBar>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Overlay className={transitionState} {...rest}>
            <ModalContainer
              className={transitionState}
              id={MODAL_MOBILE_SCROLLING_ID}
            >
              <OffClickWrapper
                onOffClick={handleCloseIntent}
                className="modal-offclick-wrapper"
              >
                <MobileTopOverlay onClick={handleCloseIntent} />
                <FocusScope contain restoreFocus autoFocus>
                  <MainModalContentContainer
                    id={MODAL_DESKTOP_SCROLLING_ID}
                    hasHeaderImage={!!headerImage}
                  >
                    <CrossIconContainer
                      onClick={handleCloseIntent}
                      tabIndex={showDesktopHeaderBar ? -1 : 0}
                    >
                      <CrossIcon />
                    </CrossIconContainer>

                    <DesktopHeaderBar
                      showDesktopHeaderBar={showDesktopHeaderBar}
                    >
                      {title}
                      <CrossIconComponent
                        showDesktopHeaderBar={showDesktopHeaderBar}
                        onClick={handleCloseIntent}
                      />
                    </DesktopHeaderBar>

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
                </FocusScope>
              </OffClickWrapper>
            </ModalContainer>
          </Overlay>
        </React.Fragment>
      )}
    </Transition>,
    domNode.current,
  );
};

ImmersiveModal.propTypes = {
  children: PropTypes.node.isRequired,
  headerImage: PropTypes.node,
  footerContent: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ImmersiveModal;
