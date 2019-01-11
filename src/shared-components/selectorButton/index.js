import React from 'react';
import PropTypes from 'prop-types';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import { COLORS } from '../../constants';
import {
  OuterContainer,
  Selector,
  SelectorContainer,
  TextContainer,
  selectorIcon,
} from './style';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  selector: PropTypes.oneOf(['radio', 'checkbox']),
};

const defaultProps = {
  onClick: () => {},
  type: 'primary',
  selector: "radio",
};

const SelectorButton = ({
  checked,
  onClick,
  children,
  type,
  selector,
  ...rest
}) => (
  <OuterContainer
    onClick={onClick}
    onKeyPress={onClick}
    tabindex="0"
    {...rest}
  >
    <SelectorContainer>
      <CheckmarkIcon
        css={`
          color: ${checked ? COLORS.white : 'transparent'};
          ${selectorIcon};
        `}
        width={11}
        height={11}
      />
      <Selector type={type} checked={checked} selector={selector} />
    </SelectorContainer>

    {children && (
      <TextContainer>{children}</TextContainer>
    )}
  </OuterContainer>
);

SelectorButton.propTypes = propTypes;
SelectorButton.defaultProps = defaultProps;

export default SelectorButton;

