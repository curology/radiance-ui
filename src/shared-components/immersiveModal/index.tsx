import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import throttle from 'lodash.throttle';
import { FocusScope } from '@react-aria/focus';

import { OffClickWrapper } from '../offClickWrapper';
import { CrossIcon } from '../../icons';
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
  ModalFooter,
  MainModalContentContainer,
  Paragraph,
} from './style';
import { isDefined } from '../../utils/isDefined';

export interface ImmersiveModalProps {
  /**
   * Modal body
   */
  children: React.ReactNode;
  /**
   * Recommended for buttons. This content is render at the bottom of the modal
   */
  footerContent?: React.ReactNode;
  /**
   * Image that will render at the top of the modal
   */
  headerImage?: React.ReactNode;
  /**
   * Function to close the modal
   */
  onClose: () => void;
  /**
   * The title of the modal
   */
  title?: string | JSX.Element;
  [key: string]: unknown;
}

const REACT_PORTAL_SECTION_ID = 'reactPortalSection';
const MODAL_MOBILE_SCROLLING_ID = 'modal-mobile-scrolling-id';
const MODAL_DESKTOP_SCROLLING_ID = 'modal-desktop-scrolling-id';

const getHtmlNode = () => document.querySelector('html') ?? document.body;
const getDomNode = () =>
  document.getElementById(REACT_PORTAL_SECTION_ID) ?? document.body;
const getModalMobileScrollingElement = () =>
  document.getElementById(MODAL_MOBILE_SCROLLING_ID);
const getModalDesktopScrollingElement = () =>
  document.getElementById(MODAL_DESKTOP_SCROLLING_ID);

/**
 * It is used to provide a layer on top of a page when we need to present more content and actions to patients.
 *
 * It should not be used as a step to add friction / confirm an action, use `Dialog Modal` instead.
 *
 * They are closable if clicked outside of container.
 *
 * Immersive modals always include the close button.
 *
 * Modals can contain a header image that is 240px tall (264px on desktop). Images should not contain rounded corners.
 *
 * `ImmersiveModal.Paragraph` subcomponent may be used to add some margin to the paragraphs inside the modal body.
 */
export const ImmersiveModal = ({
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

  const htmlNode = useRef<HTMLElement>(getHtmlNode());
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
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    setShowMobileHeaderBar(false);
    setTimeout(onClose, 450);
  };

  useEffect(() => {
    htmlNode.current = getHtmlNode();
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
    };
  }, []);

  const hasHeaderImage = isDefined(headerImage);

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
                <FocusScope contain restoreFocus>
                  <MainModalContentContainer
                    id={MODAL_DESKTOP_SCROLLING_ID}
                    hasHeaderImage={hasHeaderImage}
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
                      <CrossIconContainer
                        onClick={handleCloseIntent}
                        tabIndex={showDesktopHeaderBar ? 0 : -1}
                      >
                        <CrossIcon />
                      </CrossIconContainer>
                    </DesktopHeaderBar>

                    {hasHeaderImage && (
                      <HeaderImageContainer>{headerImage}</HeaderImageContainer>
                    )}
                    <ContentWithFooterContainer hasHeaderImage={hasHeaderImage}>
                      <div>
                        {isDefined(title) && <ModalTitle>{title}</ModalTitle>}
                        {children}
                      </div>
                      {isDefined(footerContent) && (
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

ImmersiveModal.Paragraph = Paragraph;

ImmersiveModal.propTypes = {
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  headerImage: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
