import React from 'react';
import PropTypes from 'prop-types';

import {
  CalloutContainer, Text, Icon, ParentContainer, 
} from './style';
import { COLORS } from '../../constants';

const Callout = ({ children, icon, color }) => (
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
