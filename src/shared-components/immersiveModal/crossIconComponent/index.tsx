import React, { useEffect } from 'react';
import { useFocusManager } from '@react-aria/focus';

import CrossIcon from '../../../svgs/icons/cross-icon.svg';
import { CrossIconContainer } from '../style';

type CrossIconComponentProps = {
  showDesktopHeaderBar: boolean;
  onClick: () => void;
};

/**
 * We wrap the Desktop-associated CrossIcon functionality as a React component
 * in order to take advantage of @react-aria/focus useFocusManager hook.
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
      // This clause is setup to return the focus state from the Desktop-associated CrossIcon
      // to the Mobile-associated This fires the first time the component renders. { wrap: false } keeps the
      // focus state on the initial CrossIcon button we show.
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
