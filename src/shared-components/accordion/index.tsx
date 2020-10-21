import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ChevronIcon from 'src/svgs/icons/chevron-icon.svg';
import { useTheme } from 'emotion-theming';

import { ThemeType } from '../../constants/themes/types';
import Thumbnails from './thumbnails';
import {
  AccordionBox,
  ArrowWrapper,
  Container,
  Content,
  ExpansionWrapper,
  TitleWrapper,
  Truncate,
} from './style';

type AccordionProps = {
  borderRadius?: string;
  children: React.ReactNode;
  disabled?: boolean;
  isOpen: boolean;
  noBorder?: boolean;
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
  ) => void;
  rightAlignArrow?: boolean;
  title: React.ReactNode;
};

/**
 * A list of items that allows each item's content to be expanded and collapsed by clicking its title bar.
 *
 * The accordion component expands to reveal hidden information. They should be used when you need to fit a large amount of content but don't want to visually overwhelm the user.
 */
export const Accordion = ({
  borderRadius = '4px',
  children,
  disabled = false,
  isOpen,
  noBorder = false,
  onClick,
  rightAlignArrow = false,
  title,
}: AccordionProps) => {
  const theme: ThemeType = useTheme();
  const [contentHeight, setContentHeight] = useState('0px');

  const contentRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const nextHeight = `${
      isOpen && contentRef.current ? contentRef.current.clientHeight : '0'
    }px`;

    if (contentHeight !== nextHeight) {
      setContentHeight(nextHeight);
    }
  });

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (!disabled && event.key === 'Enter') {
      onClick(event);
    }
  };

  return (
    <AccordionBox isOpen={isOpen} noBorder={!!noBorder} disabled={!!disabled}>
      <TitleWrapper
        onClick={(event): void => {
          if (!disabled) {
            onClick(event);
          }
        }}
        borderRadius={borderRadius}
        onKeyDown={handleKeyDown}
        disabled={!!disabled}
        role="button"
        isOpen={isOpen}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={!!disabled}
        aria-expanded={isOpen}
      >
        <Truncate>{title}</Truncate>
        <ArrowWrapper rightAlign={!!rightAlignArrow}>
          <ChevronIcon
            rotate={isOpen ? 90 : 0}
            width={16}
            height={16}
            fill={theme.COLORS.primary}
          />
        </ArrowWrapper>
      </TitleWrapper>
      <ExpansionWrapper
        contentHeight={contentHeight}
        aria-disabled={!!disabled}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef}>{children}</div>
      </ExpansionWrapper>
    </AccordionBox>
  );
};

Accordion.propTypes = {
  /** Sets the border-radius of Accordion.Container, AccordionBox, and TitleWrapper */
  borderRadius: PropTypes.string,
  /** node(s) that will render only when expanded */
  children: PropTypes.node.isRequired,
  /** when true, the accordion will be greyed out and the onClick prop will be disabled */
  disabled: PropTypes.bool,
  /** determine if the accordion is collapsed (false) or expanded (true) */
  isOpen: PropTypes.bool.isRequired,
  /** when true, border lines between accordions and title/children nodes will disappear */
  noBorder: PropTypes.bool,
  /** invoked when title node is clicked */
  onClick: PropTypes.func.isRequired,
  /** when true, the arrow is aligned flush with the right side of the component */
  rightAlignArrow: PropTypes.bool,
  /** node that will render whether collapsed or expanded */
  title: PropTypes.node.isRequired,
};

Accordion.Container = Container;

Accordion.Content = Content;

Accordion.Thumbnails = Thumbnails;

Accordion.Truncate = Truncate;
