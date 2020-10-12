import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import Arrow from 'src/svgs/icons/arrow.svg';

import { OffClickWrapper } from '../offClickWrapper';
import {
  MainContainer,
  Trigger,
  TooltipBox,
  TooltipContent,
  ArrowImageContainer,
} from './style';
import { COLORS } from '../../constants';

export type ArrowAlignTypes = 'left' | 'middle' | 'right';

export type PositionTypes = 'top' | 'bottom';

type TooltipProps = {
  alignRightPercent?: number;
  alignTopPercent?: number;
  arrowAlign?: ArrowAlignTypes;
  children: React.ReactNode;
  content?: React.ReactNode;
  defaultOpen?: boolean;
  display?: boolean;
  hasRestrictedWidth?: boolean;
  isSmall?: boolean;
  nudgeLeft?: number;
  nudgeRight?: number;
  nudgeTop?: number;
  nudgeBottom?: number;
  position?: PositionTypes;
};

/**
 * Tooltips provide additional context to elements or give patients hints about new features or updates.
 *
 * They can be triggered from an icon or another component (such as a navigation link)
 */
export const Tooltip = ({
  alignRightPercent = 0,
  alignTopPercent = 0,
  arrowAlign = 'middle',
  children,
  content = '',
  defaultOpen = false,
  display = true,
  hasRestrictedWidth = false,
  isSmall = false,
  nudgeLeft = 0,
  nudgeRight = 0,
  nudgeTop = 0,
  nudgeBottom = 0,
  position = 'top',
}: TooltipProps) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onClick = () => {
    if (clicked) {
      // if clicked is true, we're about to update to false so remove class
      document?.querySelector('body')?.classList.remove('cursor-pointer');
    } else {
      document?.querySelector('body')?.classList.add('cursor-pointer');
    }

    setClicked(!clicked);
  };

  const closeTooltip = () => {
    if (clicked) {
      document?.querySelector('body')?.classList.remove('cursor-pointer');
    }

    setClicked(false);
    setHovered(false);
  };

  const open = defaultOpen || clicked || hovered;

  return (
    <OffClickWrapper onOffClick={closeTooltip}>
      <Global
        styles={{
          'body.cursor-pointer': {
            cursor: 'pointer',
          },
        }}
      />
      <MainContainer>
        <Trigger
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {children}
        </Trigger>
        <TooltipBox
          alignRightPercent={alignRightPercent}
          alignTopPercent={alignTopPercent}
          arrowAlign={arrowAlign}
          displayTooltip={display}
          hasRestrictedWidth={hasRestrictedWidth}
          isSmall={isSmall}
          nudgeLeft={nudgeLeft}
          nudgeRight={nudgeRight}
          nudgeTop={nudgeTop}
          nudgeBottom={nudgeBottom}
          open={open}
          position={position}
        >
          <TooltipContent>{content}</TooltipContent>
          <ArrowImageContainer arrowAlign={arrowAlign} position={position}>
            <Arrow width={16} height={16} fill={COLORS.primary} />
          </ArrowImageContainer>
        </TooltipBox>
      </MainContainer>
    </OffClickWrapper>
  );
};

Tooltip.propTypes = {
  /**
   * Adjusts positioning, in percent
   */
  alignRightPercent: PropTypes.number,
  /**
   * Adjusts positioning, in percent
   */
  alignTopPercent: PropTypes.number,
  arrowAlign: PropTypes.oneOf(['left', 'middle', 'right']),
  /**
   * Content of the trigger element displayed on page
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /**
   * Content of the tooltip
   */
  content: PropTypes.node,
  /**
   * Show the tooltip without the need of the trigger
   */
  defaultOpen: PropTypes.bool,
  /**
   * Programatically control the tooltip to never show (false) or function as normal (true)
   */
  display: PropTypes.bool,
  /**
   * Makes the tooltip have a maximun width of 327px
   */
  hasRestrictedWidth: PropTypes.bool,
  /**
   * Small tooltip with very little padding
   */
  isSmall: PropTypes.bool,
  /**
   * Adjusts positioning, in px
   */
  nudgeLeft: PropTypes.number,
  /**
   * Adjusts positioning, in px
   */
  nudgeRight: PropTypes.number,
  /**
   * Adjusts positioning, in px
   */
  nudgeTop: PropTypes.number,
  /**
   * Adjusts positioning, in px
   */
  nudgeBottom: PropTypes.number,
  position: PropTypes.oneOf(['top', 'bottom']),
};
