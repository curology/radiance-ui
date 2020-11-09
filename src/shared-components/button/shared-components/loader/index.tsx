import React from 'react';
import { ThemeColors } from 'src/constants/themes/types';

import ButtonLoader from './style';
import { ButtonTypeWithAction } from '../..';

type LoaderProps = {
  buttonColor: ThemeColors;
  buttonType: ButtonTypeWithAction;
  className?: string;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading: boolean;
  textColor: ThemeColors;
};

const Loader = ({
  buttonColor,
  buttonType,
  className = '',
  disabled,
  isFullWidth = false,
  isLoading,
  textColor,
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
