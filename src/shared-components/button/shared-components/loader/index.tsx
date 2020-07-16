import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import ButtonLoader from './style';
import { ButtonTypeWithAction } from '../..';

type LoaderProps = {
  buttonColor: string;
  buttonType: ButtonTypeWithAction;
  className: string;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading: boolean;
  textColor: string;
};

const Loader = ({
  buttonColor,
  buttonType,
  className,
  disabled,
  isFullWidth,
  isLoading,
  textColor,
}: LoaderProps) => (
  <ButtonLoader
    buttonColor={buttonColor}
    buttonType={buttonType}
    className={className}
    disabled={disabled}
    aria-disabled={disabled}
    isFullWidth={!!isFullWidth}
    isLoading={isLoading}
    textColor={textColor}
  >
    <div>
      <span />
      <span />
      <span />
    </div>
  </ButtonLoader>
);

Loader.propTypes = {
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'action',
  ]),
  buttonColor: COLORS_PROP_TYPES,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  textColor: PropTypes.string,
};

Loader.defaultProps = {
  buttonType: 'primary',
  buttonColor: COLORS.primary,
  className: '',
  disabled: false,
  isFullWidth: false,
  isLoading: false,
  textColor: '',
};

export default Loader;
