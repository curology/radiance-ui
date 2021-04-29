import React from 'react';
import PropTypes from 'prop-types';

import { SelectorButton, SizeType, StyleType } from '../selectorButton';

export interface CheckboxProps {
  checked: boolean;
  /**
   * Text label displayed next to the checkbox
   */
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * Icons are only displayed at the large size, and inside the radio button
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
 * Checkboxes should be used to provide valuable information or additional context on a page. One of the best examples of a Checkbox is for product recommendations.
 *
 * `<Checkbox />` is a controlled component that represents a checkbox selection. This means that the `onClick` function should be used to change the checked state of the checkbox. Note that a group of checkbox buttons must be composed by a parent component.
 */
export const Checkbox = ({
  checked,
  children = null,
  disabled = false,
  icon = null,
  onClick = undefined,
  size = 'small',
  type = 'primary',
  ...rest
}: CheckboxProps) => (
  <SelectorButton
    checked={checked}
    disabled={disabled}
    icon={icon}
    onClick={
      disabled
        ? (
            event:
              | React.MouseEvent<HTMLDivElement, MouseEvent>
              | React.KeyboardEvent,
          ) => {
            event.preventDefault();
          }
        : onClick
    }
    selector="checkbox"
    size={size}
    type={type}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </SelectorButton>
);

Checkbox.propTypes = {
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

export default Checkbox;
