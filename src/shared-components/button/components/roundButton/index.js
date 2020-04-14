import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../../../constants';
import Loader from '../../shared-components/loader';
import {
  RoundButtonWrapper,
  RoundButtonBase,
  roundButtonLoader,
  RoundButtonText,
  RoundButtonContainer,
} from './style';
import withDeprecationWarning from '../../../../utils/withDeprecationWarning';

const deprecatedProperties = {
  loading: "The 'loading' prop is deprecated. Use 'isLoading' instead.",
};

const isLoadingPropFunction = (props, propName, componentName) => {
  if (props[propName] !== undefined) {
    return new Error(
      `'loading' prop will be deprecated in a future major release. Please rename 'loading' to 'isLoading' in ${componentName}`,
    );
  }
};

const propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'action',
  ]),
  color: PropTypes.oneOf(Object.keys(COLORS)),
  loading: isLoadingPropFunction,
  isLoading: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  textColor: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  buttonType: 'primary',
  color: 'purple',
  isLoading: false,
  onClick() {},
  children: '',
  textColor: '',
};

const RoundButton = ({
  onClick,
  disabled,
  children,
  buttonType,
  color,
  loading,
  isLoading,
  icon,
  textColor,
  ...rest
}) => {
  const loadingVal = loading === undefined ? isLoading : loading;

  return (
    <RoundButtonWrapper>
      <RoundButtonBase
        onClick={!disabled && !isLoading ? onClick : () => false}
        disabled={disabled}
        buttonType={buttonType}
        color={color}
        isLoading={loadingVal}
        type="button"
        textColor={textColor}
        {...rest}
      >
        {icon}
        <Loader
          isLoading={loadingVal}
          disabled={disabled}
          buttonType={buttonType}
          color={color}
          css={roundButtonLoader(disabled)}
          textColor={textColor}
        />
      </RoundButtonBase>
      {children && <p css={RoundButtonText(color, textColor)}>{children}</p>}
    </RoundButtonWrapper>
  );
};

RoundButton.propTypes = propTypes;
RoundButton.defaultProps = defaultProps;
RoundButton.Container = RoundButtonContainer;

export default withDeprecationWarning(RoundButton, deprecatedProperties);
