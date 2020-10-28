import React from 'react';

import { COLORS } from '../../../../constants';
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

export default Loader;
