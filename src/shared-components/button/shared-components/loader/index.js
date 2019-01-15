import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({loading, disabled, buttonType, className, textColor }) => (
  <ButtonLoader
    loading={loading}
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
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  className: PropTypes.string,
  textColor: PropTypes.string,
};

export default Loader;

