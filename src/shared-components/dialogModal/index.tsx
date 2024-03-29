import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useTheme } from '@emotion/react';

import { REACT_PORTAL_SECTION_ID } from '../../constants/portals';
import { CrossIcon } from '../../icons';
import Style from './style';
import { Colors } from '../../constants';

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
   * DialogModal displays a Close Icon positioned top-right.
   * This function must contain the logic for closing the modal.
   */
  onClose: () => void;
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
  onClose,
  title = '',
  ...rest
}) => {
  const ref = React.useRef(null);
  /**
   * Exposes ARIA dialog role to assistive technology, i.e., announces to users with
   * screen readers that they are in a dialog component, thereby making apparent
   * additional accessibility functionality (e.g., exiting dialog with "Esc" key)
   */
  const { dialogProps, titleProps } = useDialog({ role: 'alertdialog' }, ref);

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
    setIsClosing(true);
    setTimeout(onClose, 350);
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
              ref={ref}
              {...dialogProps}
            >
              <Style.CrossIconContainer
                backgroundColor={backgroundColorWithTheme}
                onClick={handleCloseIntent}
                tabIndex={0}
                aria-label="Close modal"
              >
                <CrossIcon />
              </Style.CrossIconContainer>
              {!!title && (
                <Style.ModalTitle {...titleProps}>{title}</Style.ModalTitle>
              )}
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
