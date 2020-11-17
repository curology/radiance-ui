import HelpIconPrimary from './svgs/help-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HelpIconPrimary, HelpIconPrimary, props);
