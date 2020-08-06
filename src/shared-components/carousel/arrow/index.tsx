import React from 'react';
import PropTypes from 'prop-types';

import { RoundButton } from '../../button';
import ArrowLeftIcon from '../../../svgs/icons/arrow-left-icon.svg';
import ArrowRightIcon from '../../../svgs/icons/arrow-right-icon.svg';
import ArrowContainer from './style';

type ArrowProps = {
  prev?: boolean;
  next?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

class Arrow extends React.Component<ArrowProps> {
  static propTypes = {
    prev: PropTypes.bool,
    next: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    prev: false,
    next: false,
    disabled: false,
  };

  arrowClickHandler = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { prev = false, next = false, disabled = false } = this.props;
    return (
      <ArrowContainer prev={prev} next={next} disabled={disabled}>
        {prev && (
          <RoundButton
            buttonType="action"
            icon={<ArrowLeftIcon />}
            onClick={this.arrowClickHandler}
          />
        )}
        {next && (
          <RoundButton
            buttonType="action"
            icon={<ArrowRightIcon />}
            onClick={this.arrowClickHandler}
          />
        )}
      </ArrowContainer>
    );
  }
}

export default Arrow;
