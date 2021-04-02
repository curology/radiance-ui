import type { ThemeColors, ThemeType } from '../../constants';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

/**
 * RoundButton can also accept a buttonType prop of 'action'
 */
export type ButtonTypeWithAction = ButtonType | 'action';

export interface BaseButtonStylesTypes {
  buttonColor: ThemeColors;
  buttonType: ButtonTypeWithAction;
  disabled: boolean;
  isFullWidth: boolean;
  isLoading: boolean;
  textColor?: ThemeColors;
  theme: ThemeType;
}
