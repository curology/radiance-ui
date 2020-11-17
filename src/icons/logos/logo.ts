import { IconProps, useIcon } from '../../shared-components/icon';
import LogoPrimary from './svgs/logo.svg';

export const Logo = (props: IconProps) =>
  useIcon(LogoPrimary, LogoPrimary, props);
