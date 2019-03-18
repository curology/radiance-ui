import React from 'react';
import PropTypes from 'prop-types';

import SelectorButton from '../selectorButton';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small']),
};

const defaultProps = {
  onClick: () => {},
  type: 'primary',
  size: 'small',
};

const Checkbox = ({
  checked,
  onClick,
  children,
  type,
  icon,
  size,
  ...rest
}) => (
  <SelectorButton
    selector="checkbox"
    checked={checked}
    onClick={onClick}
    type={type}
    icon={icon}
    size={size}
    {...rest}
  >
    {children}
  </SelectorButton>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;

