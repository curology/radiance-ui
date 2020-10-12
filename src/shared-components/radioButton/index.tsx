import React from 'react';
import PropTypes from 'prop-types';

import SelectorButton, { SizeType, StyleType } from '../selectorButton';

type RadioButtonProps = {
  checked: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: SizeType;
  type?: StyleType;
  [key: string]: any;
};

const RadioButton = ({
  checked,
  children = null,
  disabled = false,
  icon = null,
  onClick = () => undefined,
  size = 'small',
  type = 'primary',
  ...rest
}: RadioButtonProps) => (
  <SelectorButton
    checked={checked}
    disabled={disabled}
    icon={icon}
    onClick={onClick}
    selector="radio"
    size={size}
    type={type}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </SelectorButton>
);

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default RadioButton;
