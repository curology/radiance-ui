import PropTypes from 'prop-types';
import React from 'react';

import { COLORS } from '../../constants';
import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import Thumbnails from './thumbnails';
import {
  AccordionBox,
  ArrowWrapper,
  TitleWrapper,
  ExpansionWrapper,
  Container,
  Content,
  Truncate,
} from './style';

const noop = () => {};

class Accordion extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    noBorder: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    noBorder: false,
    disabled: false,
  };

  static Container = Container;

  static Content = Content;

  static Thumbnails = Thumbnails;

  static Truncate = Truncate;

  contentRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      contentHeight: this.getContentHeight(props.isOpen),
    };
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  // prettier-ignore
  getContentHeight = isOpen => (
    `${
      isOpen && this.contentRef.current
        ? this.contentRef.current.clientHeight
        : '0'
    }px`
  )

  updateHeight() {
    const { isOpen } = this.props;
    const { contentHeight } = this.state;

    if (contentHeight !== this.getContentHeight(isOpen)) {
      this.setState({
        contentHeight: this.getContentHeight(isOpen),
      });
    }
  }


  render() {
    const { contentHeight } = this.state;
    const {
      title,
      isOpen,
      onClick,
      children,
      noBorder,
      disabled,
    } = this.props;

    return (
      <AccordionBox
        isOpen={isOpen}
        noBorder={noBorder}
        disabled={disabled}
      >
        <TitleWrapper onClick={disabled ? noop : onClick} disabled={disabled}>
          <Truncate>{title}</Truncate>
          <ArrowWrapper>
            <ChevronIcon
              rotate={isOpen ? 90 : 0}
              width={8}
              height={8}
              fill={COLORS.purple}
            />
          </ArrowWrapper>
        </TitleWrapper>
        <ExpansionWrapper contentHeight={contentHeight}>
          <div ref={this.contentRef}>{children}</div>
        </ExpansionWrapper>
      </AccordionBox>
    );
  }
}

export default Accordion;
