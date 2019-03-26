import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContents } from '../../style';
import { BaseTextButton } from './style';

const propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  disabled: false,
  onClick() {},
};

const TextButton = ({
  disabled, children, onClick, ...rest
}) => (
  <BaseTextButton
    disabled={disabled}
    onClick={!disabled ? onClick : event => event.preventDefault()}
    {...rest}
  >
    <ButtonContents hasIcon={false}>{children}</ButtonContents>
  </BaseTextButton>
);

TextButton.propTypes = propTypes;
TextButton.defaultProps = defaultProps;

export default TextButton;
