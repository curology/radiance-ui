import React from 'react';
import PropTypes from 'prop-types';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import { COLORS } from '../../constants';
import {
  OuterContainer,
  Radio,
  RadioContainer,
  TextContainer,
  radioIcon,
} from './style';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
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
  children,
  type,
  ...rest
}) => (
  <OuterContainer
    onClick={onClick}
    onKeyPress={onClick}
    tabindex="0"
    {...rest}
  >
    <RadioContainer>
      <CheckmarkIcon
        css={`
          color: ${checked ? COLORS.white : 'transparent'};
          ${radioIcon};
        `}
        width={11}
        height={11}
      />
      <Radio type={type} checked={checked} />
    </RadioContainer>

    {children && (
      <TextContainer>{children}</TextContainer>
    )}
  </OuterContainer>
);

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;

