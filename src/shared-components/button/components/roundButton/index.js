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
    'action',
  ]),
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
  isLoading,
  icon,
  textColor,
  ...rest
}) => (
  <RoundButtonWrapper>
    <RoundButtonBase
      onClick={!disabled && !isLoading ? onClick : () => false}
      disabled={disabled}
      buttonType={buttonType}
      isLoading={isLoading}
      type="button"
      textColor={textColor}
      {...rest}
    >
      {icon}
      <Loader
        isLoading={isLoading}
        disabled={disabled}
        buttonType={buttonType}
        css={roundButtonLoader(disabled)}
        textColor={textColor}
      />
    </RoundButtonBase>
    {children && <RoundButtonText>{children}</RoundButtonText>}
  </RoundButtonWrapper>
);

RoundButton.propTypes = propTypes;
RoundButton.defaultProps = defaultProps;
RoundButton.Container = RoundButtonContainer;

export default RoundButton;
