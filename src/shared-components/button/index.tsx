import React from 'react';
import PropTypes from 'prop-types';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning';
import { LinkButton } from './components/linkButton';
import RoundButton from './components/roundButton';
import { TextButton } from './components/textButton';
import { COLORS, COLORS_PROP_TYPES } from '../../constants';
import {
  deprecatedProperties,
  isLoadingPropFunction,
} from './deprecatedPropsHandler';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
/**
 * RoundButton can also accept a buttonType prop of 'action'
 */
export type ButtonTypeWithAction = ButtonType | 'action';

type ButtonProps = {
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
  /**
   * Icon to render in the button. Recommended to be a Radiance icon
   */
  icon?: React.ReactNode;
  /**
   * Adjusts the default button styles so that the button takes the full width of the container. Intended for mobile-use only.
   */
  isFullWidth?: boolean;
  /**
   * When loading, onClick function execution is disallowed
   */
  isLoading?: boolean;
  loading?: boolean | undefined;
  onClick: () => void;
  /**
   * Color that will override existing text, icon, and loading colors for the button (except when disabled is true)
   */
  textColor?: string;
  [key: string]: unknown;
};

/**
 * Buttons can be used as a main call-to-action (CTA). Try to avoid using buttons of the same `buttonType` next to each other since we want to guide the user towards one option.
 *
 * `<Button.Container>` can be used to provide spacing between multiple buttons and behavior on various screen sizes. See Storybook for more details.
 *
 * We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
 */
export const Button = ({
  buttonColor = COLORS.primary,
  buttonType = 'primary',
  children,
  disabled = false,
  icon = null,
  isFullWidth = false,
  isLoading = false,
  loading = undefined,
  onClick,
  textColor = '',
  ...rest
}: ButtonProps) => {
  const loadingVal = loading === undefined ? isLoading : loading;

  return (
    <ButtonBase
      buttonColor={buttonColor}
      buttonType={buttonType}
      disabled={disabled}
      isFullWidth={isFullWidth}
      isLoading={loadingVal}
      onClick={
        !disabled && !loadingVal ? onClick : (event) => event.preventDefault()
      }
      textColor={textColor}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <ButtonContents
        hasIcon={!!icon}
        isFullWidth={isFullWidth}
        isLoading={loadingVal}
      >
        {icon}
        <ButtonText hasIcon={!!icon} isLoading={loadingVal}>
          {children}
        </ButtonText>
      </ButtonContents>
      <Loader
        buttonColor={buttonColor}
        buttonType={buttonType}
        disabled={disabled}
        isFullWidth={isFullWidth}
        isLoading={loadingVal}
        textColor={textColor}
      />
    </ButtonBase>
  );
};

Button.Container = Container;

Button.propTypes = {
  buttonColor: COLORS_PROP_TYPES,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  loading: isLoadingPropFunction,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
};

export { LinkButton, RoundButton, TextButton };
export default withDeprecationWarning(Button, deprecatedProperties);
