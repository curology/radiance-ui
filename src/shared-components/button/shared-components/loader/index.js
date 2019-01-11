import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({loading, disabled, buttonType, className}) => (
  <ButtonLoader
    loading={loading}
    disabled={disabled}
    buttonType={buttonType}
    className={className}
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
    'quinary',
  ]),
  className: PropTypes.string,
};

export default Loader;

