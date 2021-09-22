import React from 'react';

import ButtonLoader from './style';
import type { ButtonTypeWithAction } from '../../types';
import type { ThemeColors } from '../../../../constants';

export interface LoaderProps {
  buttonColor: ThemeColors;
  buttonType: ButtonTypeWithAction;
  className?: string;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading: boolean;
  textColor?: ThemeColors;
}

const Loader: React.FC<LoaderProps> = ({
  buttonColor,
  buttonType,
  className = '',
  disabled,
  isFullWidth = false,
  isLoading,
  textColor,
}) => (
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
