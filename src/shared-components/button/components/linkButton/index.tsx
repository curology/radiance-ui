import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import Container from '../../shared-components/container';
import { ButtonType } from '../..';
import { ButtonContents, ButtonText } from '../../style';
import { linkButtonStyles } from './style';

const propTypes = {
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

const defaultProps = {
  as: 'a',
  buttonColor: COLORS.primary,
  buttonType: 'primary',
  disabled: false,
  onClick: () => undefined,
  textColor: '',
};

type LinkProps = {
  as?: string | React.ElementType;
  buttonColor?: string;
  buttonType?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  textColor?: string;
  [key: string]: any;
};

const Link = ({
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

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
Link.Container = Container;

export default Link;
