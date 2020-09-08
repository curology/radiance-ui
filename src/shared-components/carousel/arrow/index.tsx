import React from 'react';
import PropTypes from 'prop-types';

import { RoundButton } from '../../button';
import ArrowLeftIcon from '../../../svgs/icons/arrow-left-icon.svg';
import ArrowRightIcon from '../../../svgs/icons/arrow-right-icon.svg';
import { ArrowContainer, BottomRightAlignedArrowContainer } from './style';

type ArrowProps = {
  bottomRightAlignedArrows?: boolean;
  prev?: boolean;
  next?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

class Arrow extends React.Component<ArrowProps> {
  static propTypes = {
    bottomRightAlignedArrows: PropTypes.bool,
    prev: PropTypes.bool,
    next: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    bottomRightAlignedArrows: false,
    prev: false,
    next: false,
    disabled: false,
  };

  arrowClickHandler = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const {
      bottomRightAlignedArrows = false,
      prev = false,
      next = false,
      disabled = false,
    } = this.props;
    const ArrowContainerComponent = bottomRightAlignedArrows
      ? BottomRightAlignedArrowContainer
      : ArrowContainer;

    return (
      <ArrowContainerComponent prev={prev} next={next} disabled={disabled}>
        {prev && (
          <RoundButton
            buttonType={bottomRightAlignedArrows ? 'primary' : 'action'}
            disabled={disabled}
            icon={<ArrowLeftIcon />}
            onClick={this.arrowClickHandler}
          />
        )}
        {next && (
          <RoundButton
            buttonType={bottomRightAlignedArrows ? 'primary' : 'action'}
            disabled={disabled}
            icon={<ArrowRightIcon />}
            onClick={this.arrowClickHandler}
          />
        )}
      </ArrowContainerComponent>
    );
  }
}

export default Arrow;
