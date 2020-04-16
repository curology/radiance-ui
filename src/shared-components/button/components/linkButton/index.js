import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../../../constants';
import Container from '../../shared-components/container';
import { ButtonContents, ButtonText } from '../../style';
import { linkButtonStyles } from './style';

const propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  buttonColor: PropTypes.oneOf(Object.values(COLORS)),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  onClick: PropTypes.func,
  textColor: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  buttonType: 'primary',
  buttonColor: COLORS.primary,
  as: 'a',
  onClick: () => undefined,
  textColor: '',
};

const Link = ({
  disabled,
  children,
  buttonType,
  buttonColor,
  as,
  onClick,
  textColor,
  ...rest
}) => {
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
