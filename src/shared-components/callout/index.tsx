import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Style from './style';
import { COLORS_PROP_TYPES, ThemeColors, ThemeType } from '../../constants';

export interface CalloutProps {
  /**
   * Content of the Callout element. It may contain `<strong>` tags
   */
  children: React.ReactNode;
  /**
   * Color of the text and icon
   */
  color?: ThemeColors;
  /**
   * Icon displayed inside the callout right aligned
   */
  icon?: React.ReactNode;
  /**
   * Custom prop to draw on preset Callout styles
   */
  type?: 'success';
}

/**
 * Pulls a specific styling preset based on available theme values and `type`
 */
const getCalloutStyles = (
  theme: ThemeType,
  color?: ThemeColors,
  type?: CalloutProps['type'],
) => {
  let backgroundColor: ThemeColors = theme.COLORS.infoLight;
  let textColor = color || theme.COLORS.primary;

  if (type === 'success') {
    backgroundColor = theme.COLORS.successLight;
    textColor = theme.COLORS.success;
  }

  return {
    backgroundColor,
    textColor,
  };
};

/**
 * Callouts should be used to provide valuable information or additional context on a page. One of the best examples of a callout is for product recommendations.
 *
 * `Callout` will cover the entirety of the container that holds it. You may optionally wrap it with `Callout.Container` which will set the `max-width` to `327px`.
 *
 * If you use a glyph as callout icon the recommended dimesions are 48x48 pixels.
 */
export const Callout = ({
  children,
  color,
  icon = null,
  type,
}: CalloutProps) => {
  const theme = useTheme();
  const { backgroundColor, textColor } = getCalloutStyles(theme, color, type);

  return (
    <Style.CalloutContainer backgroundColor={backgroundColor}>
      <Style.Text textColor={textColor}>{children}</Style.Text>
      {icon && <Style.Icon iconColor={textColor}>{icon}</Style.Icon>}
    </Style.CalloutContainer>
  );
};

Callout.Container = Style.ParentContainer;

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  color: COLORS_PROP_TYPES,
  icon: PropTypes.node,
};
