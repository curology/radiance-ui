import SettingsIconPrimary from './svgs/settings-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SettingsIconPrimary, SettingsIconPrimary, props);
