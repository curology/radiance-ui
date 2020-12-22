import { MenuIcon, MenuIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MenuIcon, MenuIconSecondary, props);
