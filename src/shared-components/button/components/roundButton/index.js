import React from 'react';
import PropTypes from 'prop-types';

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
      `'loading' prop will be deprecated in a future major release. Please rename 'loading' to 'isLoading' in ${componentName}`
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
  loading: isLoadingPropFunction,
  isLoading: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  textColor: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  buttonType: 'primary',
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
          css={roundButtonLoader(disabled)}
          textColor={textColor}
        />
      </RoundButtonBase>
      {children && <RoundButtonText>{children}</RoundButtonText>}
    </RoundButtonWrapper>
  );
};

RoundButton.propTypes = propTypes;
RoundButton.defaultProps = defaultProps;
RoundButton.Container = RoundButtonContainer;

export default withDeprecationWarning(RoundButton, deprecatedProperties);
