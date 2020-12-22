import { SettingsIcon, SettingsIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SettingsIcon, SettingsIconSecondary, props);
