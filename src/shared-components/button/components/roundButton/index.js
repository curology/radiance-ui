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

const propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
  ]),
  loading: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

const defaultProps = {
  disabled: false,
  buttonType: 'primary',
  loading: false,
  onClick() {},
  children: '',
};

const RoundButton = ({
  onClick,
  disabled,
  children,
  buttonType,
  loading,
  icon,
  ...rest
}) => (
  <RoundButtonWrapper
    onClick={!disabled && !loading ? onClick : () => false}
    disabled={disabled}
    loading={loading}
  >
    <RoundButtonBase
      disabled={disabled}
      buttonType={buttonType}
      loading={loading}
      type="button"
      {...rest}
    >
      {icon}
      <Loader
        loading={loading}
        disabled={disabled}
        buttonType={buttonType}
        className={roundButtonLoader(disabled)}
      />
    </RoundButtonBase>
    {children && <RoundButtonText>{children}</RoundButtonText>}
  </RoundButtonWrapper>
);

RoundButton.propTypes = propTypes;
RoundButton.defaultProps = defaultProps;
RoundButton.Container = RoundButtonContainer;

export default RoundButton;
