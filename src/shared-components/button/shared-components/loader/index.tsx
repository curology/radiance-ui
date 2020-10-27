import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, COLORS_PROP_TYPES } from '../../../../constants';
import ButtonLoader from './style';
import { ButtonTypeWithAction } from '../..';

type LoaderProps = {
  buttonColor?: string;
  buttonType?: ButtonTypeWithAction;
  className?: string;
  disabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  textColor?: string;
};

const Loader = ({
  buttonColor = COLORS.primary,
  buttonType = 'primary',
  className = '',
  disabled = false,
  isFullWidth = false,
  isLoading = false,
  textColor = '',
}: LoaderProps) => (
  <ButtonLoader
    buttonColor={buttonColor}
    buttonType={buttonType}
    className={className}
    disabled={disabled}
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
  buttonColor: COLORS_PROP_TYPES,
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
