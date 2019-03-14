import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../shared-components/container';
import { ButtonContents, ButtonText } from '../../style';
import { linkButtonStyles } from './style';

const propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  renderedTag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
};

const defaultProps = {
  disabled: false,
  buttonType: 'primary',
  renderedTag: 'a',
  onClick() {},
};

const Link = ({
  disabled,
  children,
  buttonType,
  renderedTag,
  onClick,
  textColor,
  ...rest
}) => {
  const ContainerTag = renderedTag;

  return (
    <ContainerTag
      css={linkButtonStyles({ disabled, buttonType, textColor })}
      disabled={disabled}
      onClick={!disabled ? onClick : () => false}
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