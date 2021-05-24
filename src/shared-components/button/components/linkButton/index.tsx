import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Container from '../../shared-components/container';
import { ButtonContents, ButtonText } from '../../style';
import Style from './style';
import { COLORS_PROP_TYPES, ThemeColors } from '../../../../constants';

import type { ButtonType } from '../../types';

export interface LinkButtonProps {
  /**
   * Specifies the tag or element to be rendered, like an 'a' or 'span'
   */
  as?: string | React.ElementType;
  buttonColor?: ThemeColors;
  /**
   * Determines the button's main style theme
   */
  buttonType?: ButtonType;
  /**
   * Node to be rendered inside the button. Recommended to be the button text
   */
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  /**
   * Color that will override existing text, icon, and loading colors for the button (except when disabled is true)
   */
  textColor?: ThemeColors;
  [key: string]: unknown;
}

interface LinkButton extends React.FC<LinkButtonProps> {
  Container: typeof Container;
}

/**
 * `LinkButton` will render a 'button-like' link for directing/linking to the path specified. This component can work with React Router's `Link`/`NavLink` by passing in the router component as a prop ---> `<LinkButton to='/path' as={Link}> ....`.
 *
 * `<LinkButton.Container>` can be used to provide spacing between multiple buttons and behavior on various screen sizes.
 *
 * We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
 */
export const LinkButton: LinkButton = ({
  as = 'a',
  buttonColor,
  buttonType = 'primary',
  children,
  disabled = false,
  onClick = () => undefined,
  textColor,
  ...rest
}) => {
  const theme = useTheme();
  const ContainerTag = as;
  const buttonColorWithTheme = buttonColor ?? theme.COLORS.primary;

  return (
    <ContainerTag
      css={Style.linkButtonStyles({
        disabled,
        buttonType,
        buttonColor: buttonColorWithTheme,
        textColor,
        theme,
      })}
      disabled={disabled}
      onClick={!disabled ? onClick : () => false}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <ButtonContents isLoading={false} isFullWidth={false} hasIcon={false}>
        <ButtonText isLoading={false} hasIcon={false}>
          {children}
        </ButtonText>
      </ButtonContents>
    </ContainerTag>
  );
};

LinkButton.Container = Container;

LinkButton.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  buttonColor: COLORS_PROP_TYPES,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  textColor: COLORS_PROP_TYPES,
};
