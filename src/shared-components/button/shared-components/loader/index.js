import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({loading, disabled, buttonType}) => (
  <ButtonLoader loading={loading} disabled={disabled} buttonType={buttonType}>
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
};

export default Loader;

