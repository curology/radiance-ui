import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Style from './style';
import { isDefined } from '../../utils/isDefined';
import type { ThemeColors, ThemeType } from '../../constants';

export interface CalloutProps {
  /**
   * Content of the Callout element. It may contain `<strong>` tags
   */
  children: React.ReactNode;
  /**
   * Icon displayed inside the callout right aligned
   */
  icon?: React.ReactNode;
  /**
   * Custom prop to draw on preset Callout styles
   */
  type?: 'error' | 'success';
}

interface Callout extends React.FC<CalloutProps> {
  Container: typeof Style.ParentContainer;
}

/**
 * Pulls a specific styling preset based on available theme values and `type`
 */
const getCalloutStyles = (theme: ThemeType, type?: CalloutProps['type']) => {
  // Default values if no type provided
  let backgroundColor: ThemeColors = theme.COLORS.infoLight;
  let textColor: ThemeColors = theme.COLORS.primary;

  if (type === 'success') {
    backgroundColor = theme.COLORS.successLight;
    textColor = theme.COLORS.success;
  } else if (type === 'error') {
    backgroundColor = theme.COLORS.errorLight;
    textColor = theme.COLORS.error;
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
 * If you use a glyph as callout icon the recommended dimesions are 48x48 pixels (which is the default for Glyphs)
 */
export const Callout: Callout = ({ children, icon, type }) => {
  const theme = useTheme();
  const { backgroundColor, textColor } = getCalloutStyles(theme, type);

  return (
    <Style.CalloutContainer backgroundColor={backgroundColor}>
      <Style.Text textColor={textColor}>{children}</Style.Text>
      {isDefined(icon) && icon !== false && (
        <Style.Icon iconColor={textColor}>{icon}</Style.Icon>
      )}
    </Style.CalloutContainer>
  );
};

Callout.Container = Style.ParentContainer;

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['error', 'success']),
};
