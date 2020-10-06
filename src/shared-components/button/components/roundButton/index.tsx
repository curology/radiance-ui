import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import Loader from '../../shared-components/loader';
import {
  RoundButtonWrapper,
  RoundButtonBase,
  roundButtonLoader,
  RoundButtonContainer,
  roundButtonTextStyles,
} from './style';
import withDeprecationWarning from '../../../../utils/withDeprecationWarning';
import { ButtonTypeWithAction } from '../..';
import {
  deprecatedProperties,
  isLoadingPropFunction,
} from '../../deprecatedPropsHandler';

const propTypes = {
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
  textColor: PropTypes.string,
};

type RoundButtonProps = {
  /**
   * TODO-TS: Limit type from string to COLORS constants options
   */
  buttonColor?: string;
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
  loading?: boolean | undefined;
  onClick?: () => void;
  /**
   * Color that will override existing text, icon, and loading colors (except when disabled is true)
   */
  textColor?: string;
  [key: string]: any;
};

export const RoundButton = ({
  buttonColor = COLORS.primary,
  buttonType = 'primary',
  children = '',
  disabled = false,
  icon,
  isLoading = false,
  loading = undefined,
  onClick = () => undefined,
  textColor = '',
  ...rest
}: RoundButtonProps) => {
  const loadingVal = loading === undefined ? isLoading : loading;

  return (
    <RoundButtonWrapper>
      <RoundButtonBase
        onClick={!disabled && !isLoading ? onClick : () => false}
        disabled={disabled}
        buttonType={buttonType}
        buttonColor={buttonColor}
        isLoading={loadingVal}
        type="button"
        textColor={textColor}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {icon}
        <Loader
          buttonColor={buttonColor}
          buttonType={buttonType}
          disabled={disabled}
          css={roundButtonLoader(disabled)}
          isLoading={loadingVal}
          textColor={textColor}
        />
      </RoundButtonBase>
      {children && (
        <p css={roundButtonTextStyles(buttonColor, textColor)}>{children}</p>
      )}
    </RoundButtonWrapper>
  );
};

RoundButton.propTypes = propTypes;
RoundButton.Container = RoundButtonContainer;

/**
 * TODO-Storybook: Once loading prop fully deprecated, remove default export
 * and rely on named export only for Docs compatibility
 */
export default withDeprecationWarning(RoundButton, deprecatedProperties);
