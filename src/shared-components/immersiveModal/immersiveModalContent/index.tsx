import React from 'react';
import { useFocusManager } from '@react-aria/focus';

import { CrossIcon } from '../../../icons';
import { isDefined } from '../../../utils/isDefined';
import {
  CROSS_ICON_CONTAINER_ID,
  MODAL_DESKTOP_SCROLLING_ID,
} from '../constants';
import type { ImmersiveModalProps } from '..';
import SharedStyles from '../style';
import Style from './style';

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
export const ImmersiveModalContent = ({
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
   * nothing happens. We making the content of the container tabbable such that when the
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
          <SharedStyles.CrossIconButton
            id={CROSS_ICON_CONTAINER_ID}
            onClick={handleCloseIntent}
            showDesktopHeaderBar={showDesktopHeaderBar}
            onKeyDown={onKeyDown}
          >
            <CrossIcon />
          </SharedStyles.CrossIconButton>
        </React.Fragment>
      )}

      {hasHeaderImage && (
        <Style.HeaderImageContainer>{headerImage}</Style.HeaderImageContainer>
      )}
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
