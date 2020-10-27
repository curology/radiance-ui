import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import ChevronIcon from 'src/svgs/icons/chevron-icon.svg';
import { COLORS } from 'src/constants';

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
  /** Sets the border-radius of Accordion.Container, AccordionBox, and TitleWrapper */
  borderRadius?: string;
  /** node(s) that will render only when expanded */
  children: React.ReactNode;
  /** when true, the accordion will be greyed out and the onClick prop will be disabled */
  disabled?: boolean;
  /** determine if the accordion is collapsed (false) or expanded (true) */
  isOpen: boolean;
  /** when true, border lines between accordions and title/children nodes will disappear */
  noBorder?: boolean;
  /** invoked when title node is clicked */
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
  ) => void;
  /** when true, the arrow is aligned flush with the right side of the component */
  rightAlignArrow?: boolean;
  /** node that will render whether collapsed or expanded */
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
  const [contentHeight, setContentHeight] = useState('0px');

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextHeight =
      isOpen && contentRef.current
        ? `${contentRef.current.clientHeight}px`
        : '0px';

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
            fill={COLORS.primary}
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

Accordion.Container = Container;

Accordion.Content = Content;

Accordion.Thumbnails = Thumbnails;

Accordion.Truncate = Truncate;

Accordion.propTypes = {
  borderRadius: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  noBorder: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  rightAlignArrow: PropTypes.bool,
  title: PropTypes.node.isRequired,
};
