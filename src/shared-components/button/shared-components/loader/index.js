import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({ isLoading, disabled, buttonType, className, textColor }) => (
  <ButtonLoader
    isLoading={isLoading}
    disabled={disabled}
    buttonType={buttonType}
    className={className}
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
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'action',
  ]),
  className: PropTypes.string,
  textColor: PropTypes.string,
};

export default Loader;
