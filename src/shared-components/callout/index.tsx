import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { CalloutContainer, Text, Icon, ParentContainer } from './style';
import { COLORS_PROP_TYPES, ThemeColors } from '../../constants';

type CalloutProps = {
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
};

/**
 * Callouts should be used to provide valuable information or additional context on a page. One of the best examples of a callout is for product recommendations.
 *
 * `Callout` will cover the entirety of the container that holds it. You may optionally wrap it with `Callout.Container` which will set the `max-width` to `327px`.
 *
 * If you use a glyph as callout icon the recommended dimesions are 48x48 pixels.
 */
export const Callout = ({ children, color, icon = null }: CalloutProps) => {
  const theme = useTheme();
  const colorWithTheme = color || theme.COLORS.primary;

  return (
    <CalloutContainer>
      <Text textColor={colorWithTheme}>{children}</Text>
      {icon && <Icon iconColor={colorWithTheme}>{icon}</Icon>}
    </CalloutContainer>
  );
};

Callout.Container = ParentContainer;

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  color: COLORS_PROP_TYPES,
  icon: PropTypes.node,
};
