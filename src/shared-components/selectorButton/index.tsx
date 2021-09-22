import React from 'react';
import PropTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';

import { CheckmarkIcon, CircleSolidIcon } from '../../icons';
import Style from './style';
import { isDefined } from '../../utils/isDefined';

export type SelectorType = 'radio' | 'checkbox';
export type SizeType = 'large' | 'small';
export type StyleType = 'primary' | 'secondary';

export interface SelectorButtonProps {
  checked: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent,
  ) => void;
  selector?: SelectorType;
  size?: SizeType;
  type?: StyleType;
  [key: string]: unknown;
}

export const SelectorButton: React.FC<SelectorButtonProps> = ({
  checked,
  children = null,
  disabled = false,
  icon = null,
  onClick = undefined,
  selector = 'radio',
  size = 'small',
  type = 'primary',
  ...rest
}) => {
  const theme = useTheme();

  const checkedIcon =
    selector === 'radio' ? (
      <CircleSolidIcon
        css={css`
          color: ${theme.COLORS.white};
        `}
        width={8}
        height={8}
      />
    ) : (
      <CheckmarkIcon
        css={css`
          color: ${theme.COLORS.white};
        `}
      />
    );

  return (
    <Style.OuterContainer
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      selector={selector}
      role={selector}
      aria-checked={checked}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Style.SelectorContainer>
        <Style.SelectorIcon disabled={disabled}>
          {checked ? checkedIcon : size === 'large' && icon}
        </Style.SelectorIcon>
        <Style.Selector
          type={type}
          selectorChecked={checked}
          disabled={disabled}
          selector={selector}
          selectorSize={size}
        />
      </Style.SelectorContainer>

      {isDefined(children) && (
        <Style.TextContainer>{children}</Style.TextContainer>
      )}
    </Style.OuterContainer>
  );
};

SelectorButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  selector: PropTypes.oneOf(['radio', 'checkbox']),
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};
