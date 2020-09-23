import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from 'src/constants';
import ChevronIcon from 'src/svgs/icons/chevron-icon.svg';

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
 * TODO-TS: Convert to Function component and use ES6 defaults
 */
type AccordionDefaultProps = {
  borderRadius: string;
  disabled: boolean;
  noBorder: boolean;
  rightAlignArrow: boolean;
};

class Accordion extends React.Component<
  AccordionProps & AccordionDefaultProps,
  { contentHeight: string }
> {
  static propTypes = {
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

  static defaultProps = {
    borderRadius: '4px',
    disabled: false,
    noBorder: false,
    rightAlignArrow: false,
  };

  static Container = Container;

  static Content = Content;

  static Thumbnails = Thumbnails;

  static Truncate = Truncate;

  contentRef = React.createRef<HTMLDivElement>();

  state = { contentHeight: '0px' };

  componentDidMount() {
    this.updateHeight();
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  // prettier-ignore
  getContentHeight = (isOpen: boolean) => (
    `${
      isOpen && this.contentRef.current
        ? this.contentRef.current.clientHeight
        : '0'
    }px`
  );

  updateHeight() {
    const { isOpen } = this.props;
    const { contentHeight } = this.state;

    const nextHeight = this.getContentHeight(isOpen);

    if (contentHeight !== nextHeight) {
      this.setState({ contentHeight: nextHeight });
    }
  }

  handleKeyDown = (event: React.KeyboardEvent): void => {
    const { onClick, disabled } = this.props;
    if (!disabled && event.key === 'Enter') {
      onClick(event);
    }
  };

  render() {
    const { contentHeight } = this.state;
    const {
      borderRadius,
      title,
      isOpen,
      onClick,
      children,
      noBorder,
      disabled,
      rightAlignArrow,
    } = this.props;

    return (
      <AccordionBox isOpen={isOpen} noBorder={!!noBorder} disabled={!!disabled}>
        <TitleWrapper
          onClick={(event): void => {
            if (!disabled) {
              onClick(event);
            }
          }}
          borderRadius={borderRadius}
          onKeyDown={this.handleKeyDown}
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
              fill={COLORS.purple}
            />
          </ArrowWrapper>
        </TitleWrapper>
        <ExpansionWrapper
          contentHeight={contentHeight}
          aria-disabled={!!disabled}
          aria-hidden={!isOpen}
        >
          <div ref={this.contentRef}>{children}</div>
        </ExpansionWrapper>
      </AccordionBox>
    );
  }
}

export default Accordion;
