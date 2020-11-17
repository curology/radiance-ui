import FlagIconPrimary from './svgs/flag-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FlagIconPrimary, FlagIconPrimary, props);
