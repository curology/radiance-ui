import React from 'react';
import PropTypes from 'prop-types';

import ButtonLoader from './style';

const Loader = ({
  buttonType,
  className,
  disabled,
  isFullWidth,
  isLoading,
  noDesktopFullWidth,
  textColor,
}) => (
  <ButtonLoader
    buttonType={buttonType}
    className={className}
    disabled={disabled}
    isLoading={isLoading}
    isFullWidth={isFullWidth}
    noDesktopFullWidth={noDesktopFullWidth}
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  noDesktopFullWidth: PropTypes.bool,
  textColor: PropTypes.string,
};

Loader.defaultProps = {
  noDesktopFullWidth: false,
};

export default Loader;
