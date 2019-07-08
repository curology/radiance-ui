import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({
  buttonType,
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  textColor: PropTypes.string,
};

export default Loader;
