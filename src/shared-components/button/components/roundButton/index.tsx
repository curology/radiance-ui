import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Loader from '../../shared-components/loader';
import Style from './style';
import withDeprecationWarning from '../../../../utils/withDeprecationWarning';
import {
  deprecatedProperties,
  isLoadingPropFunction,
} from '../../deprecatedPropsHandler';
import { COLORS_PROP_TYPES, ThemeColors } from '../../../../constants';
import { isDefined } from '../../../../utils/isDefined';
import type { ButtonTypeWithAction } from '../../types';

export interface RoundButtonProps {
  buttonColor?: ThemeColors;
  /**
   * Determines the button's main style theme
   */
  buttonType?: ButtonTypeWithAction;
  /**
   * Node to be rendered inside the button. Recommended to be the button text
   */
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * Icon to render in the button. Recommended to be a Radiance icon
   */
  icon: React.ReactNode;
  /**
   * When loading, onClick function execution is disallowed
   */
  isLoading?: boolean;
  loading?: boolean;
  onClick?: () => void;
  /**
   * Color that will override existing text, icon, and loading colors (except when disabled is true)
   */
  textColor?: ThemeColors;
  [key: string]: unknown;
}

interface RoundButton extends React.FC<RoundButtonProps> {
  Container: typeof Style.RoundButtonContainer;
}

/**
 * `<RoundButton />` behaves mostly the same as `<Button />` except that it requires an `icon` prop since that is the main content placed with in the round button. Any children of the component will be rendered immediately below the round button.
 *
 * `<RoundButton.Container>` can be used to wrap `<RoundButton />` components. Since it has some opinions on width and spacing, the max number of buttons you want to wrap is **2**.
 *
 * We should generally try to use the default button color when possible. Only for special cases should we need to use a different button color.
 */
export const RoundButton: RoundButton = ({
  buttonColor,
  buttonType = 'primary',
  children,
  disabled = false,
  icon,
  isLoading = false,
  loading = undefined,
  onClick = () => undefined,
  textColor,
  ...rest
}) => {
  const theme = useTheme();
  const buttonColorWithTheme = buttonColor ?? theme.COLORS.primary;
  const loadingVal = loading === undefined ? isLoading : loading;

  return (
    <Style.RoundButtonWrapper>
      <Style.RoundButtonBase
        onClick={!disabled && !isLoading ? onClick : () => false}
        disabled={disabled}
        buttonType={buttonType}
        buttonColor={buttonColorWithTheme}
        isLoading={loadingVal}
        type="button"
        isFullWidth={false}
        textColor={textColor}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {icon}
        <Loader
          buttonColor={buttonColorWithTheme}
          buttonType={buttonType}
          disabled={disabled}
          css={Style.roundButtonLoader(disabled, theme)}
          isLoading={loadingVal}
          textColor={textColor}
        />
      </Style.RoundButtonBase>
      {isDefined(children) && (
        <p
          css={Style.roundButtonTextStyles(
            buttonColorWithTheme,
            theme,
            textColor,
          )}
        >
          {children}
        </p>
      )}
    </Style.RoundButtonWrapper>
  );
};

RoundButton.Container = Style.RoundButtonContainer;

RoundButton.propTypes = {
  buttonColor: COLORS_PROP_TYPES,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'action',
  ]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  loading: isLoadingPropFunction,
  onClick: PropTypes.func,
  textColor: COLORS_PROP_TYPES,
};

export default withDeprecationWarning(RoundButton, deprecatedProperties);
