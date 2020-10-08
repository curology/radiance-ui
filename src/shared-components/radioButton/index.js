import React from 'react';
import PropTypes from 'prop-types';

import SelectorButton from '../selectorButton';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  /**
   * Text label displayed next to the radio button
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Icon optionally displayed inside the radio button. Icons are only displayed at the 'large' size
   */
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small']),
};

/**
 *
 * `<RadioButton />` is a controlled component that represents a radio selection. This means that the `onClick` function should be used to change the checked state of the radio button.
 *
 * Note that a group of radio buttons must be composed by a parent component.
 */
export const RadioButton = ({
  checked,
  onClick,
  children = null,
  type = 'primary',
  icon = undefined,
  size = 'small',
  ...rest
}) => (
  <SelectorButton
    selector="radio"
    checked={checked}
    onClick={onClick}
    type={type}
    icon={icon}
    size={size}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </SelectorButton>
);

RadioButton.propTypes = propTypes;

export default RadioButton;
