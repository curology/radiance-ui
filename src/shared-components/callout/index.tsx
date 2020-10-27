import React from 'react';
import PropTypes from 'prop-types';

import {
  CalloutContainer, Text, Icon, ParentContainer, 
} from './style';
import { COLORS } from '../../constants';

type CalloutProps = {
  /**
   * Content of the Callout element. It may contain `<strong>` tags
   */
  children: React.ReactNode;
  /**
   * Color of the text and icon
   */
  color?: string;
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
export const Callout = ({
  children,
  color = COLORS.primary,
  icon = null,
}: CalloutProps) => (
  <CalloutContainer>
    <Text color={color}>{children}</Text>
    {icon && <Icon color={color}>{icon}</Icon>}
  </CalloutContainer>
);

Callout.Container = ParentContainer;

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  icon: PropTypes.node,
};
