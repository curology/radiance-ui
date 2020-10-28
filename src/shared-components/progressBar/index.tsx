import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, PROGRESS_BAR_STATUS } from '../../constants';
import { OuterContainer, InnerBar } from './style';

export type ProgressBarStatusType = valueof<typeof PROGRESS_BAR_STATUS>;

type ProgressBarProps = {
  backgroundColor?: string;
  barColor?: string;
  /**
   * The bar height
   */
  height?: number;
  /**
   * The time that would take to load the bar completely. Must be valid animation value.
   */
  loadingTime?: string;
  status: ProgressBarStatusType;
  [key: string]: unknown;
};

/**
 * The component has `position: absolute` by default. You must provide a container with `position: relative` to contain the progress bar. To further refine the position, you may use custom styles.
 *
 * To start the animation use `loading` status. To control the result pass `success` or `error` to the status property.
 */
export const ProgressBar = ({
  backgroundColor = COLORS.background,
  barColor = COLORS.primary,
  height = 4,
  loadingTime = '20s',
  status,
  ...rest
}: ProgressBarProps) => (
  <OuterContainer
    status={status}
    height={height}
    backgroundColor={backgroundColor}
    // eslint-disable-next-line react/jsx-props-no-spreading
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
