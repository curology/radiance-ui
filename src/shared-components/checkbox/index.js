import React from 'react';
import PropTypes from 'prop-types';

import { SelectorButton } from '../selectorButton';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Text label displayed next to the checkbox
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Icons are only displayed at the large size, and inside the radio button
   */
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small']),
};

/**
 * Checkboxs should be used to provide valuable information or additional context on a page. One of the best examples of a Checkbox is for product recommendations.
 *
 * `<Checkbox />` is a controlled component that represents a checkbox selection. This means that the `onClick` function should be used to change the checked state of the checkbox. Note that a group of checkbox buttons must be composed by a parent component.
 */
export const Checkbox = ({
  checked,
  children = null,
  disabled = false,
  icon = undefined,
  onClick = undefined,
  size = 'small',
  type = 'primary',
  ...rest
}) => (
  <SelectorButton
    selector="checkbox"
    checked={checked}
    disabled={disabled}
    onClick={!disabled ? onClick : (event) => event.preventDefault()}
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
