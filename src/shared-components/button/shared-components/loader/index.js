import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import ButtonLoader from './style';

const Loader = ({
  buttonType,
  buttonColor,
  className,
  disabled,
  isFullWidth,
  isLoading,
  textColor,
}) => (
  <ButtonLoader
    isLoading={isLoading}
    disabled={disabled}
    buttonType={buttonType}
    buttonColor={buttonColor}
    className={className}
    textColor={textColor}
    isFullWidth={isFullWidth}
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
