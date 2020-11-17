import RefreshIconPrimary from './svgs/refresh-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(RefreshIconPrimary, RefreshIconPrimary, props);
