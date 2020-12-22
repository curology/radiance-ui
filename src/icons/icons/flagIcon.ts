import { FlagIcon, FlagIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FlagIcon, FlagIconSecondary, props);
