import MenuIconPrimary from './svgs/menu-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MenuIconPrimary, MenuIconPrimary, props);
