import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContents } from '../../style';
import Style from './style';

export interface TextButtonProps {
  /**
   * Node/text to be rendered inside the button
   */
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  [key: string]: unknown;
}

/**
 * `TextButton` will render a block of text (or node) that will function as a button.
 * The component renders with padding and should not be used inline within body text, etc.
 * Useful for rendering a chunk of text that can be clicked but can also be disabled if needed.
 */
export const TextButton: React.FC<TextButtonProps> = ({
  children,
  disabled = false,
  onClick = () => undefined,
  ...rest
}) => (
  <Style.BaseTextButton
    disabled={disabled}
    onClick={
      !disabled
        ? onClick
        : (event) => {
            event.preventDefault();
          }
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    <ButtonContents hasIcon={false} isFullWidth={false} isLoading={false}>
      {children}
    </ButtonContents>
  </Style.BaseTextButton>
);

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
