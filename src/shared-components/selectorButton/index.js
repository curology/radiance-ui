import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import CircleSolidIcon from '../../svgs/icons/circle-solid-icon.svg';
import { COLORS } from '../../constants';
import {
  OuterContainer,
  Selector,
  SelectorContainer,
  TextContainer,
  SelectorIcon,
} from './style';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  selector: PropTypes.oneOf(['radio', 'checkbox']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small']),
};

const defaultProps = {
  disabled: false,
  onClick: undefined,
  type: 'primary',
  selector: 'radio',
  icon: undefined,
  children: undefined,
  size: undefined,
};

const SelectorButton = ({
  checked,
  disabled,
  onClick,
  children,
  type,
  selector,
  icon,
  size,
  ...rest
}) => {
  const checkedIcon =
    selector === 'radio' ? (
      <CircleSolidIcon
        css={css`
          color: ${COLORS.white};
        `}
        width={8}
        height={8}
      />
    ) : (
      <CheckmarkIcon
        css={css`
          color: ${COLORS.white};
        `}
        width={16}
        height={16}
      />
    );
  return (
    <OuterContainer
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex="0"
      selector={selector}
      role={selector}
      aria-checked={checked}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <SelectorContainer>
        <SelectorIcon disabled={disabled}>
          {checked ? checkedIcon : size === 'large' && icon}
        </SelectorIcon>
        <Selector
          type={type}
          checked={checked}
          disabled={disabled}
          selector={selector}
          size={size}
        />
      </SelectorContainer>

      {children && <TextContainer>{children}</TextContainer>}
    </OuterContainer>
  );
};

SelectorButton.propTypes = propTypes;
SelectorButton.defaultProps = defaultProps;

export default SelectorButton;
