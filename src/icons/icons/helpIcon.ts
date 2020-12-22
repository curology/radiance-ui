import { HelpIcon, HelpIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HelpIcon, HelpIconSecondary, props);
