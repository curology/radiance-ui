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

export const Callout = ({
  children,
  icon = null,
  color = COLORS.primary,
}: CalloutProps) => (
  <CalloutContainer>
    <Text color={color}>{children}</Text>
    {icon && <Icon color={color}>{icon}</Icon>}
  </CalloutContainer>
);

Callout.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  color: PropTypes.string,
};

Callout.Container = ParentContainer;

export default Callout;
