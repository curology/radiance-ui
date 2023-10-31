import React, { useState } from 'react';
import { useTheme } from '@emotion/react';

import { ArrowIcon } from '../../icons';
import { OffClickWrapper } from '../offClickWrapper';
import Style from './style';

export type ArrowAlignTypes = 'left' | 'middle' | 'right';

export type PositionTypes = 'top' | 'bottom';

export interface TooltipProps {
  /**
   * Adjusts positioning, in percent
   */
  alignRightPercent?: number;
  /**
   * Adjusts positioning, in percent
   */
  alignTopPercent?: number;
  arrowAlign?: ArrowAlignTypes;
  /**
   * Content of the trigger element displayed on page
   */
  children: React.ReactNode;
  /**
   * Content of the tooltip
   */
  content?: React.ReactNode;
  /**
   * Show the tooltip without the need of the trigger
   */
  defaultOpen?: boolean;
  /**
   * When true, the tooltip will open on click only and not on hover
   */
  disableHover?: boolean;
  /**
   * Programatically control the tooltip to never show (false) or function as normal (true)
   */
  display?: boolean;
  /**
   * Makes the tooltip have a maximun width of 327px
   */
  hasRestrictedWidth?: boolean;
  /**
   * Small tooltip with very little padding
   */
  isSmall?: boolean;
  /**
   * Adjusts positioning, in px
   */
  nudgeBottom?: number;
  /**
   * Adjusts positioning, in px
   */
  nudgeLeft?: number;
  /**
   * Adjusts positioning, in px
   */
  nudgeRight?: number;
  /**
   * Adjusts positioning, in px
   */
  nudgeTop?: number;
  position?: PositionTypes;
}

/**
 * Tooltips provide additional context to elements or give patients hints about new features or updates.
 *
 * They can be triggered from an icon or another component (such as a navigation link)
 */
export const Tooltip: React.FC<TooltipProps> = ({
  alignRightPercent = 0,
  alignTopPercent = 0,
  arrowAlign = 'middle',
  children,
  content = '',
  defaultOpen = false,
  disableHover = false,
  display = true,
  hasRestrictedWidth = false,
  isSmall = false,
  nudgeBottom = 0,
  nudgeLeft = 0,
  nudgeRight = 0,
  nudgeTop = 0,
  position = 'top',
}) => {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  const closeTooltip = () => {
    setClicked(false);
    setHovered(false);
  };

  const handleMouseEnter = () => {
    if (disableHover) {
      return;
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const open = defaultOpen || clicked || hovered;

  return (
    <OffClickWrapper onOffClick={closeTooltip}>
      <Style.MainContainer>
        <Style.Trigger
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </Style.Trigger>
        <Style.TooltipBox
          alignRightPercent={alignRightPercent}
          alignTopPercent={alignTopPercent}
          arrowAlign={arrowAlign}
          onClick={open ? onClick : undefined}
          displayTooltip={display}
          hasRestrictedWidth={hasRestrictedWidth}
          isSmall={isSmall}
          nudgeBottom={nudgeBottom}
          nudgeLeft={nudgeLeft}
          nudgeRight={nudgeRight}
          nudgeTop={nudgeTop}
          open={open}
          position={position}
        >
          <Style.TooltipContent>{content}</Style.TooltipContent>
          <Style.ArrowImageContainer
            arrowAlign={arrowAlign}
            position={position}
          >
            <ArrowIcon width={16} height={16} fill={theme.COLORS.primary} />
          </Style.ArrowImageContainer>
        </Style.TooltipBox>
      </Style.MainContainer>
    </OffClickWrapper>
  );
};
