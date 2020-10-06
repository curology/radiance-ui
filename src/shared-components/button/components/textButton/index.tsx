import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContents } from '../../style';
import { BaseTextButton } from './style';

const propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

type TextButtonProps = {
  /**
   * Node/text to be rendered inside the button
   */
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: any;
};

export const TextButton = ({
  children,
  disabled = false,
  onClick = () => undefined,
  ...rest
}: TextButtonProps) => (
  <BaseTextButton
    disabled={disabled}
    onClick={!disabled ? onClick : (event) => event.preventDefault()}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <ButtonContents hasIcon={false}>{children}</ButtonContents>
  </BaseTextButton>
);

TextButton.propTypes = propTypes;
