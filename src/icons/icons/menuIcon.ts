import MenuIconPrimary from './svgs/menu-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const MenuIcon = (props: IconProps) =>
  useIcon(MenuIconPrimary, MenuIconPrimary, props);
