import { LogoPrimary, LogoSecondary, LogoSecondaryRebrand } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LogoPrimary, LogoSecondary, props, LogoSecondaryRebrand);
