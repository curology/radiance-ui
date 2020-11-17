import ContrastIconPrimary from './svgs/contrast-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ContrastIcon = (props: IconProps) =>
  useIcon(ContrastIconPrimary, ContrastIconPrimary, props);
