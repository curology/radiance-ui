import React from 'react';
import PropTypes from 'prop-types';

import SelectorButton from '../selectorButton';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
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
  children: null,
  disabled: false,
  icon: undefined,
  onClick: () => undefined,
  type: 'primary',
  size: 'small',
};

const Checkbox = ({
  checked,
  disabled,
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
    disabled={disabled}
    onClick={!disabled ? onClick : event => event.preventDefault()}
    type={type}
    icon={icon}
    size={size}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </SelectorButton>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
