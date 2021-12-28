import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import throttle from 'lodash.throttle';
import { FocusScope, useFocusManager } from '@react-aria/focus';

import { REACT_PORTAL_SECTION_ID } from '../../constants/portals';
import { OffClickWrapper } from '../offClickWrapper';
import { CrossIcon } from '../../icons';
import Style from './style';
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

interface ImmersiveModal extends React.FC<ImmersiveModalProps> {
  Paragraph: typeof Style.Paragraph;
}

const MODAL_MOBILE_SCROLLING_ID = 'modal-mobile-scrolling-id';
const MODAL_DESKTOP_SCROLLING_ID = 'modal-desktop-scrolling-id';

const getHtmlNode = () => document.querySelector('html') ?? document.body;
const getDomNode = () =>
  document.getElementById(REACT_PORTAL_SECTION_ID) ?? document.body;
const getModalMobileScrollingElement = () =>
  document.getElementById(MODAL_MOBILE_SCROLLING_ID);
const getModalDesktopScrollingElement = () =>
  document.getElementById(MODAL_DESKTOP_SCROLLING_ID);

interface ImmersiveModalContentProps
  extends Pick<
    ImmersiveModalProps,
    'children' | 'footerContent' | 'headerImage' | 'title'
  > {
  handleCloseIntent: () => void;
  showDesktopHeaderBar: boolean;
  showMobileHeaderBar: boolean;
}

/**
 * We define a standalone component, ImmersiveModalContent, in order to add
 * `useFocusManager` functionality, which only works as a child of <FocusScope>
 */
const ImmersiveModalContent = ({
  footerContent,
  headerImage,
  showDesktopHeaderBar,
  showMobileHeaderBar,
  title,
  handleCloseIntent,
  children,
}: ImmersiveModalContentProps) => {
  const focusManager = useFocusManager();

  /**
   * It is not typical modal behavior to be able to scroll. Consequently, our
   * keyboard autofocus handling means when users try and scroll in the ImmersiveModal,
   * nothing happens. We make the content of the container tabbable such that when the
   * arrow keys are used (as in normal scroll behavior) we are able to break focus with
   * the close button and allow scrolling of the content
   */
  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        focusManager.focusNext({ wrap: true });
        break;
      case 'ArrowUp':
        focusManager.focusPrevious({ wrap: true });
        break;
      default:
        break;
    }
  };

  const hasHeaderImage = isDefined(headerImage);

  return (
    <Style.MainModalContentContainer
      id={MODAL_DESKTOP_SCROLLING_ID}
      hasHeaderImage={hasHeaderImage}
    >
      {!showMobileHeaderBar && (
        <React.Fragment>
          <Style.DesktopHeaderBar showDesktopHeaderBar={showDesktopHeaderBar}>
            <span>{title}</span>
          </Style.DesktopHeaderBar>
          <Style.CrossIconButton
            onClick={handleCloseIntent}
            showDesktopHeaderBar={showDesktopHeaderBar}
            onKeyDown={onKeyDown}
            aria-label="Close modal"
          >
            <CrossIcon />
          </Style.CrossIconButton>
        </React.Fragment>
      )}

      {hasHeaderImage && (
        <Style.HeaderImageContainer>{headerImage}</Style.HeaderImageContainer>
      )}
      {/**
       * Note: we normally do not want to add tabIndex to non-interactive elements,
       * but it is necessary to make ImmersiveModal fully keyboard navigable when
       * there  is scrollable content
       */}
      <Style.ContentWithFooterContainer
        hasHeaderImage={hasHeaderImage}
        tabIndex={0}
      >
        <div>
          {isDefined(title) && <Style.ModalTitle>{title}</Style.ModalTitle>}
          <section>{children}</section>
        </div>
        {isDefined(footerContent) && (
          <Style.ModalFooter>{footerContent}</Style.ModalFooter>
        )}
      </Style.ContentWithFooterContainer>
    </Style.MainModalContentContainer>
  );
};

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
export const ImmersiveModal: ImmersiveModal = ({
  children,
  footerContent = null,
  headerImage = null,
  onClose,
  title = '',
  ...rest
}) => {
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

    const htmlNodeInstance = htmlNode.current;
    const modalMobileScrollingElementInstance =
      modalMobileScrollingElement.current;
    const modalDesktopScrollingElementInstance =
      modalDesktopScrollingElement.current;

    htmlNodeInstance.classList.add('no-scroll');

    if (
      modalMobileScrollingElementInstance &&
      modalDesktopScrollingElementInstance
    ) {
      modalMobileScrollingElementInstance.addEventListener(
        'scroll',
        handleScroll,
      );
      modalDesktopScrollingElementInstance.addEventListener(
        'scroll',
        handleScroll,
      );
    }

    return () => {
      htmlNodeInstance.classList.remove('no-scroll');

      if (
        modalMobileScrollingElementInstance &&
        modalDesktopScrollingElementInstance
      ) {
        modalMobileScrollingElementInstance.removeEventListener(
          'scroll',
          handleScroll,
        );
        modalDesktopScrollingElementInstance.removeEventListener(
          'scroll',
          handleScroll,
        );
      }
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
          <Style.MobileHeaderBar showMobileHeaderBar={showMobileHeaderBar}>
            {title}
            <Style.CrossIconButton
              onClick={handleCloseIntent}
              aria-label="Close modal"
            >
              <CrossIcon />
            </Style.CrossIconButton>
          </Style.MobileHeaderBar>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Style.Overlay className={transitionState} {...rest}>
            <Style.ModalContainer
              className={transitionState}
              id={MODAL_MOBILE_SCROLLING_ID}
            >
              <OffClickWrapper
                onOffClick={handleCloseIntent}
                className="modal-offclick-wrapper"
              >
                <Style.MobileTopOverlay onClick={handleCloseIntent} />
                <FocusScope contain restoreFocus autoFocus>
                  <ImmersiveModalContent
                    footerContent={footerContent}
                    headerImage={headerImage}
                    showDesktopHeaderBar={showDesktopHeaderBar}
                    showMobileHeaderBar={showMobileHeaderBar}
                    title={title}
                    handleCloseIntent={handleCloseIntent}
                  >
                    {children}
                  </ImmersiveModalContent>
                </FocusScope>
              </OffClickWrapper>
            </Style.ModalContainer>
          </Style.Overlay>
        </React.Fragment>
      )}
    </Transition>,
    domNode.current,
  );
};

ImmersiveModal.Paragraph = Style.Paragraph;

ImmersiveModal.propTypes = {
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  headerImage: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
