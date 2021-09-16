import React from 'react';
import { useFocusManager } from '@react-aria/focus';

import { CrossIcon } from '../../icons';
import Style from './style';
import { isDefined } from '../../utils/isDefined';
import {
  CROSS_ICON_CONTAINER_ID,
  MODAL_DESKTOP_SCROLLING_ID,
} from './constants';

import type { ImmersiveModalProps } from '.';

interface ImmersiveModalContentProps
  extends Pick<
    ImmersiveModalProps,
    'children' | 'footerContent' | 'headerImage' | 'title'
  > {
  handleCloseIntent: () => void;
  showDesktopHeaderBar: boolean;
  showMobileHeaderBar: boolean;
}

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
            id={CROSS_ICON_CONTAINER_ID}
            onClick={handleCloseIntent}
            showDesktopHeaderBar={showDesktopHeaderBar}
            onKeyDown={onKeyDown}
          >
            <CrossIcon />
          </Style.CrossIconButton>
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
