import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../../constants';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons';
import ArrowContainer from './style';

const Arrow = props => {
  const {
    style,
    onClick,
    onUserInteraction,
    prev,
    next,
    disabled,
    ...rest
  } = props;

  return (
    <ArrowContainer
      {...rest}
      style={{ ...style }}
      onClick={() => {
        onClick();
        onUserInteraction();
      }}
      prev={prev}
      next={next}
      disabled={disabled}
    >
      {prev && <ArrowLeftIcon fill={COLORS.purple} />}
      {next && <ArrowRightIcon fill={COLORS.purple} />}
    </ArrowContainer>
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
  onUserInteraction: PropTypes.func,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Arrow;
