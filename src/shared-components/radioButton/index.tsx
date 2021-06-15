import React from 'react';
import PropTypes from 'prop-types';

import { SelectorButton, SizeType, StyleType } from '../selectorButton';

export interface RadioButtonProps {
  checked: boolean;
  /**
   * Text label displayed next to the radio button
   */
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * Icon optionally displayed inside the radio button.
   *
   * Icons are only displayed at the 'large' size
   */
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
  ) => void;
  size?: SizeType;
  type?: StyleType;
  [key: string]: unknown;
}

/**
 * `<RadioButton />` is a controlled component that represents a radio selection. This means that the `onClick` function should be used to change the checked state of the radio button.
 *
 * Note that a group of radio buttons must be composed by a parent component.
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  children = null,
  disabled = false,
  icon = null,
  onClick = () => undefined,
  size = 'small',
  type = 'primary',
  ...rest
}) => (
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
