import FlagIconPrimary from './svgs/flag-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const FlagIcon = (props: IconProps) =>
  useIcon(FlagIconPrimary, FlagIconPrimary, props);
