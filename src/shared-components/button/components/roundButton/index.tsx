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
import { deprecatedProperties, isLoadingPropFunction, ButtonType } from '../..';

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

const defaultProps = {
  buttonColor: COLORS.primary,
  buttonType: 'primary',
  children: '',
  disabled: false,
  isLoading: false,
  loading: undefined,
  onClick: () => undefined,
  textColor: '',
};

type RoundButtonProps = {
  buttonColor?: string;
  buttonType?: ButtonType;
  children?: React.ReactNode;
  disabled?: boolean;
  icon: React.ReactNode;
  isLoading?: boolean;
  loading?: boolean | undefined;
  onClick?: () => void;
  textColor?: string;
  [key: string]: any;
};

const RoundButton = ({
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
RoundButton.defaultProps = defaultProps;
RoundButton.Container = RoundButtonContainer;

export default withDeprecationWarning(RoundButton, deprecatedProperties);
