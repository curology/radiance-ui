import React from 'react';
import PropTypes from 'prop-types';

import { RoundButton } from '../../button';
import ArrowLeftIcon from '../../../svgs/icons/arrow-left-icon.svg';
import ArrowRightIcon from '../../../svgs/icons/arrow-right-icon.svg';
import ArrowContainer from './style';

class Arrow extends React.Component {
  static propTypes = {
    prev: PropTypes.bool,
    next: PropTypes.bool,
    disabled: PropTypes.bool,
    onUserInteraction: PropTypes.func,
    onClick: PropTypes.func,
  };

  arrowClickHandler = () => {
    const { onUserInteraction, onClick } = this.props;
    onClick();
    onUserInteraction();
  };

  render() {
    const { prev, next, disabled } = this.props;
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
