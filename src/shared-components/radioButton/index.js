import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from 'radiance-ui/lib/constants';
import { CheckmarkIcon } from 'radiance-ui/lib/icons';

import {
  RadioButtonContainer,
  RadioButtonStyles,
  RadioButtonText,
  radioIcon,
  radioIconContainer,
} from './style';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  justify: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

const defaultProps = {
  onClick: () => {},
  type: 'primary',
};

const RadioButton = ({
  checked,
  onClick,
  justify,
  children,
  type,
  ...rest
}) => (
  <RadioButtonContainer
    onClick={onClick}
    checked={checked}
    justify={justify}
    {...rest}
  >
    <div className={radioIconContainer}>
      <CheckmarkIcon
        css={`
          color: ${checked ? COLORS.white : 'transparent'};
          ${radioIcon};
        `}
        width={11}
        height={11}
      />
      <RadioButtonStyles type={type} checked={checked} />
    </div>

    {children && (
      <RadioButtonText checked={checked}>{children}</RadioButtonText>
    )}
  </RadioButtonContainer>
);

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;

