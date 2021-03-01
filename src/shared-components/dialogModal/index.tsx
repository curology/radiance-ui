import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { FocusScope } from '@react-aria/focus';
import { useTheme } from 'emotion-theming';

import { CrossIcon } from '../../icons';
import {
  Overlay,
  ModalContainer,
  ModalTitle,
  CrossIconContainer,
} from './style';
import { Colors, primaryTheme, secondaryTheme } from '../../constants';

export interface DialogModalProps {
  /**
   * DialogModal background color. Defaults to the current theme's `white` if not specified.
   */
  backgroundColor?: Colors['background'];
  /**
   * Dialog Modal content.
   * Must contain at least 1 button and is responsible for closing the modal.
   */
  children: React.ReactNode;
  /**
   * If provided, DialogModal displays a Close Icon positioned top-right.
   * This function must contain the logic for closing the modal.
   */
  onCloseIconClick?: () => void;
  title?: string;
  [key: string]: unknown;
}

const REACT_PORTAL_SECTION_ID = 'reactPortalSection';
const getHtmlNode = () => document.querySelector('html') ?? document.body;
const getDomNode = () =>
  document.getElementById(REACT_PORTAL_SECTION_ID) ?? document.body;

/**
 * Dialog modals shouldn't contain large content and should not scroll unless screen size dictates it. To display large amounts of content, use `Immersive modal` instead.
 *
 * Dialog modals require a user to make a choice between options and are not closable on click/tap outside. They may contain a close button if a close function is provided.
 *
 * Dialog Modals should always contain at least 1 button and the logic should close the modal at some point.
 */
export const DialogModal = ({
  backgroundColor,
  children,
  onCloseIconClick,
  title = '',
  ...rest
}: DialogModalProps) => {
  const theme = useTheme();
  const backgroundColorWithTheme = backgroundColor ?? theme.COLORS.white;
  const [isClosing, setIsClosing] = useState(false);

  const domNode = useRef<HTMLElement>(getDomNode());
  const htmlNode = useRef<HTMLElement>(getHtmlNode());

  useEffect(() => {
    domNode.current = getDomNode();
    htmlNode.current = getHtmlNode();
    htmlNode.current.classList.add('no-scroll');
    return () => {
      htmlNode.current.classList.remove('no-scroll');
    };
  }, []);

  const handleCloseIntent = () => {
    if (onCloseIconClick) {
      setIsClosing(true);
      setTimeout(onCloseIconClick, 350);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseIntent();
    }
  };

  return ReactDOM.createPortal(
    <Transition
      appear
      in={!isClosing}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 250,
      }}
      unmountOnExit
    >
      {(transitionState): JSX.Element => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Overlay className={transitionState} {...rest}>
          <FocusScope contain restoreFocus autoFocus>
            <ModalContainer
              backgroundColor={backgroundColorWithTheme}
              className={transitionState}
              onKeyDown={handleKeyDown}
            >
              {onCloseIconClick && (
                <CrossIconContainer
                  backgroundColor={backgroundColorWithTheme}
                  onClick={handleCloseIntent}
                  role="button"
                  tabIndex={0}
                  aria-label="Close modal"
                >
                  <CrossIcon />
                </CrossIconContainer>
              )}
              {!!title && <ModalTitle>{title}</ModalTitle>}
              {children}
            </ModalContainer>
          </FocusScope>
        </Overlay>
      )}
    </Transition>,
    domNode.current,
  );
};

DialogModal.propTypes = {
  backgroundColor: PropTypes.oneOf([
    primaryTheme.COLORS.background,
    secondaryTheme.COLORS.background,
  ]),
  children: PropTypes.node.isRequired,
  onCloseIconClick: PropTypes.func,
  title: PropTypes.string,
};
