import HelpIconPrimary from './svgs/help-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const HelpIcon = (props: IconProps) =>
  useIcon(HelpIconPrimary, HelpIconPrimary, props);
