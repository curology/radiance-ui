import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, PROGRESS_BAR_STATUS } from '../../constants';
import { OuterContainer, InnerBar } from './style';

const ProgressBar = ({
  backgroundColor,
  barColor,
  height,
  loadingTime,
  status,
  ...rest
}) => (
  <OuterContainer
    status={status}
    height={height}
    backgroundColor={backgroundColor}
    {...rest}
  >
    <InnerBar
      status={status}
      height={height}
      barColor={barColor}
      loadingTime={loadingTime}
    />
  </OuterContainer>
);

ProgressBar.defaultProps = {
  backgroundColor: COLORS.background,
  barColor: COLORS.primary,
  height: 4,
  loadingTime: '20s',
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  barColor: PropTypes.string,
  height: PropTypes.number,
  loadingTime: PropTypes.string,
  status: PropTypes.oneOf([
    PROGRESS_BAR_STATUS.loading,
    PROGRESS_BAR_STATUS.success,
    PROGRESS_BAR_STATUS.error,
  ]).isRequired,
};

export default ProgressBar;
