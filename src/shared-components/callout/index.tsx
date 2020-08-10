import React from 'react';
import PropTypes from 'prop-types';

import {
  CalloutContainer, Text, Icon, ParentContainer, 
} from './style';
import { COLORS } from '../../constants';

type CalloutProps = {
  children: React.ReactNode;
  color?: string;
  icon?: React.ReactNode;
};

const Callout = ({
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

Callout.defaultProps = {
  color: COLORS.primary,
  icon: null,
};

Callout.Container = ParentContainer;

export default Callout;
