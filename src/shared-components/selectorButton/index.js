import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';

import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import {COLORS} from '../../constants';
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
  Icon: PropTypes.node,
};

const defaultProps = {
  onClick: () => {
  },
  type: 'primary',
  selector: 'radio',
};

const SelectorButton = ({
  checked,
  onClick,
  children,
  type,
  selector,
  Icon,
  ...rest
}) => (
  <OuterContainer
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex="0"
    selector={selector}
    {...rest}
  >
    <SelectorContainer>
      {Icon ? (
        <Icon
          css={css`
          ${selectorIcon};
        `}
          width={29}
          height={29}
        />
      ) : (
        <CheckmarkIcon
          css={css`
            ${selectorIcon};
            color: ${checked ? COLORS.white : 'transparent'};
          `}
          width={11}
          height={11}
        />
      )}
      <Selector type={type} checked={checked} selector={selector}/>
    </SelectorContainer>

    {children && (
      <TextContainer>{children}</TextContainer>
    )}
  </OuterContainer>
);

SelectorButton.propTypes = propTypes;
SelectorButton.defaultProps = defaultProps;

export default SelectorButton;

