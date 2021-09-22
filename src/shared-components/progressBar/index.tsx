import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import {
  COLORS_PROP_TYPES,
  PROGRESS_BAR_STATUS,
  ThemeColors,
} from '../../constants';
import Style from './style';

export type ProgressBarStatusType = valueof<typeof PROGRESS_BAR_STATUS>;

export interface ProgressBarProps {
  backgroundColor?: ThemeColors;
  barColor?: ThemeColors;
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
}

/**
 * The component has `position: absolute` by default. You must provide a container with `position: relative` to contain the progress bar. To further refine the position, you may use custom styles.
 *
 * To start the animation use `loading` status. To control the result pass `success` or `error` to the status property.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  backgroundColor,
  barColor,
  height = 4,
  loadingTime = '20s',
  status,
  ...rest
}) => {
  const theme = useTheme();

  const backgroundColorWithTheme = backgroundColor ?? theme.COLORS.background;
  const barColorWithTheme = barColor ?? theme.COLORS.primary;

  return (
    <Style.OuterContainer
      status={status}
      barHeight={height}
      backgroundColor={backgroundColorWithTheme}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Style.InnerBar
        status={status}
        barHeight={height}
        barColor={barColorWithTheme}
        loadingTime={loadingTime}
      />
    </Style.OuterContainer>
  );
};

ProgressBar.propTypes = {
  backgroundColor: COLORS_PROP_TYPES,
  barColor: COLORS_PROP_TYPES,
  height: PropTypes.number,
  loadingTime: PropTypes.string,
  status: PropTypes.oneOf([
    PROGRESS_BAR_STATUS.loading,
    PROGRESS_BAR_STATUS.success,
    PROGRESS_BAR_STATUS.error,
  ]).isRequired,
};
