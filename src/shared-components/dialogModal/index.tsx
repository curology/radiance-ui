import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { FocusScope } from '@react-aria/focus';
import { useTheme } from '@emotion/react';

import { REACT_PORTAL_SECTION_ID } from '../../constants/portals';
import { CrossIcon } from '../../icons';
import Style from './style';
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
  onCloseIconClick?: (() => void) | null;
  title?: string;
  [key: string]: unknown;
}

interface DialogModal extends React.FC<DialogModalProps> {
  Paragraph: typeof Style.Paragraph;
}

const getHtmlNode = () => document.querySelector('html') ?? document.body;
const getDomNode = () =>
  document.getElementById(REACT_PORTAL_SECTION_ID) ?? document.body;

/**
 * Dialog modals shouldn't contain large content and should not scroll unless screen size dictates it. To display large amounts of content, use `Immersive modal` instead.
 *
 * Dialog modals require a user to make a choice between options and are not closable on click/tap outside. They may contain a close button if a close function is provided.
 *
 * Dialog Modals should always contain at least 1 button and the logic should close the modal at some point.
 *
 * `DialogModal.Paragraph` subcomponent may be used to add some margin to the paragraphs inside the modal body.
 */
export const DialogModal: DialogModal = ({
  backgroundColor,
  children,
  onCloseIconClick,
  title = '',
  ...rest
}) => {
  const theme = useTheme();
  const backgroundColorWithTheme = backgroundColor ?? theme.COLORS.white;
  const [isClosing, setIsClosing] = useState(false);

  const domNode = useRef<HTMLElement>(getDomNode());
  const htmlNode = useRef<HTMLElement>(getHtmlNode());

  useEffect(() => {
    domNode.current = getDomNode();
    htmlNode.current = getHtmlNode();
    const htmlNodeInstance = htmlNode.current;

    htmlNodeInstance.classList.add('no-scroll');
    return () => {
      htmlNodeInstance.classList.remove('no-scroll');
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
        <Style.Overlay className={transitionState} {...rest}>
          <FocusScope contain restoreFocus autoFocus>
            <Style.ModalContainer
              backgroundColor={backgroundColorWithTheme}
              className={transitionState}
              onKeyDown={handleKeyDown}
            >
              {onCloseIconClick && (
                <Style.CrossIconContainer
                  backgroundColor={backgroundColorWithTheme}
                  onClick={handleCloseIntent}
                  role="button"
                  tabIndex={0}
                  aria-label="Close modal"
                >
                  <CrossIcon />
                </Style.CrossIconContainer>
              )}
              {!!title && <Style.ModalTitle>{title}</Style.ModalTitle>}
              {children}
            </Style.ModalContainer>
          </FocusScope>
        </Style.Overlay>
      )}
    </Transition>,
    domNode.current,
  );
};

DialogModal.Paragraph = Style.Paragraph;

DialogModal.propTypes = {
  backgroundColor: PropTypes.oneOf([
    primaryTheme.COLORS.background,
    secondaryTheme.COLORS.background,
  ]),
  children: PropTypes.node.isRequired,
  onCloseIconClick: PropTypes.func,
  title: PropTypes.string,
};
