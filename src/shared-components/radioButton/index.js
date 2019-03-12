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
  Icon: PropTypes.node,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};

const defaultProps = {
  onClick: () => {},
  type: 'primary',
};

const RadioButton = ({
  checked,
  onClick,
  children,
  type,
  Icon,
  iconWidth,
  iconHeight,
  ...rest
}) => (
  <SelectorButton
    selector="radio"
    checked={checked}
    onClick={onClick}
    type={type}
    Icon={Icon}
    iconWidth={iconWidth}
    iconHeight={iconHeight}
    {...rest}
  >
    {children}
  </SelectorButton>
);

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;

