import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Loader from './shared-components/loader';
import Container from './shared-components/container';
import { ButtonBase, ButtonText, ButtonContents } from './style';
import withDeprecationWarning from '../../utils/withDeprecationWarning';
import { LinkButton } from './components/linkButton';
import { AnchorLinkButton } from './components/anchorLinkButton';
import RoundButton from './components/roundButton';
import { TextButton } from './components/textButton';
import {
  deprecatedProperties,
  isLoadingPropFunction,
} from './deprecatedPropsHandler';
import { COLORS_PROP_TYPES, ThemeColors } from '../../constants';
import { isDefined } from '../../utils/isDefined';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
/**
 * RoundButton can also accept a buttonType prop of 'action'
 */
export type ButtonTypeWithAction = ButtonType | 'action';

export interface ButtonProps {
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
  loading?: boolean;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /**
   * Color that will override existing text, icon, and loading colors for the button (except when disabled is true)
   */
  textColor?: ThemeColors;
  [key: string]: unknown;
}

/**
 * Buttons can be used as a main call-to-action (CTA). Try to avoid using buttons of the same `buttonType` next to each other since we want to guide the user towards one option.
 *
 * `<Button.Container>` can be used to provide spacing between multiple buttons and behavior on various screen sizes. See Storybook for more details.
 *
 * We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
 */
export const Button = ({
  buttonColor,
  buttonType = 'primary',
  children,
  disabled = false,
  icon = null,
  isFullWidth = false,
  isLoading = false,
  loading = undefined,
  onClick,
  textColor,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();
  const buttonColorWithTheme = buttonColor ?? theme.COLORS.primary;
  const loadingVal = loading === undefined ? isLoading : loading;
  const hasIcon = isDefined(icon);

  return (
    <ButtonBase
      buttonColor={buttonColorWithTheme}
      buttonType={buttonType}
      disabled={disabled}
      isFullWidth={isFullWidth}
      isLoading={loadingVal}
      onClick={
        !disabled && !loadingVal
          ? onClick
          : (event) => {
              event.preventDefault();
            }
      }
      textColor={textColor}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <ButtonContents
        hasIcon={hasIcon}
        isFullWidth={isFullWidth}
        isLoading={loadingVal}
      >
        {icon}
        <ButtonText hasIcon={hasIcon} isLoading={loadingVal}>
          {children}
        </ButtonText>
      </ButtonContents>
      <Loader
        buttonColor={buttonColorWithTheme}
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

export { AnchorLinkButton, LinkButton, RoundButton, TextButton };
export default withDeprecationWarning(Button, deprecatedProperties);
