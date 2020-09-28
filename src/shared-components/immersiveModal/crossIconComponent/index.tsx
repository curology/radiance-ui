import React, { useEffect } from 'react';
import { useFocusManager } from '@react-aria/focus';

import CrossIcon from '../../../svgs/icons/cross-icon.svg';
import { CrossIconContainer } from '../style';

type CrossIconComponentProps = {
  showDesktopHeaderBar: boolean;
  onClick: () => void;
};

/**
 * We wrap the second of the CrossIcons we render as a React component
 * in order to use the @react-aria/focus useFocusManager hook.
 *
 * This allows us to automatically toggle focus state between the two separate
 * CrossIcons present in the markup. (We keep both rendered for our transitions.)
 */
const CrossIconComponent = ({
  showDesktopHeaderBar,
  onClick,
}: CrossIconComponentProps) => {
  const focusManager = useFocusManager();

  useEffect(() => {
    if (showDesktopHeaderBar) {
      focusManager.focusNext();
    } else {
      /**
       * This clause returns focus to the initial CrossIcon when the second CrossIcon is in focus, and we scroll back up.
       * However, it also triggers on the initial render, so { wrap: false } prevents the focus state from changing.
       */
      focusManager.focusPrevious({ wrap: false });
    }
  }, [showDesktopHeaderBar]);

  return (
    <CrossIconContainer
      onClick={onClick}
      tabIndex={showDesktopHeaderBar ? 0 : -1}
    >
      <CrossIcon />
    </CrossIconContainer>
  );
};

export default CrossIconComponent;
