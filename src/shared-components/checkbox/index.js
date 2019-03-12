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

const Checkbox = ({
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
    selector="checkbox"
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

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;

