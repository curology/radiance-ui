import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import Container from '../../shared-components/container';
import { ButtonType } from '../..';
import { ButtonContents, ButtonText } from '../../style';
import { linkButtonStyles } from './style';

type LinkProps = {
  /**
   * Specifies the tag or element to be rendered
   */
  as?: 'a' | React.ElementType;
  /**
   * TODO-TS: Limit type from string to COLORS constants options
   */
  buttonColor?: string;
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
  textColor?: string;
  [key: string]: unknown;
};

/**
 * `LinkButton` will render a 'button-like' link for directing/linking to the path specified. This component can work with React Router's `Link`/`NavLink` by passing in the router component as a prop ---> `<LinkButton to='/path' as={Link}> ....`.
 *
 * `<LinkButton.Container>` can be used to provide spacing between multiple buttons and behavior on various screen sizes.
 *
 * We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
 */
export const LinkButton = ({
  as = 'a',
  buttonColor = COLORS.primary,
  buttonType = 'primary',
  children,
  disabled = false,
  onClick = () => undefined,
  textColor = '',
  ...rest
}: LinkProps) => {
  const ContainerTag = as;

  return (
    <ContainerTag
      css={linkButtonStyles({
        disabled,
        buttonType,
        buttonColor,
        textColor,
      })}
      disabled={disabled}
      onClick={!disabled ? onClick : () => false}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <ButtonContents hasIcon={false}>
        <ButtonText>{children}</ButtonText>
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
  textColor: PropTypes.string,
};
