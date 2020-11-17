import SettingsIconPrimary from './svgs/settings-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const SettingsIcon = (props: IconProps) =>
  useIcon(SettingsIconPrimary, SettingsIconPrimary, props);
