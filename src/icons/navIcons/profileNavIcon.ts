import { ProfileNavIcon, ProfileNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ProfileNavIcon, ProfileNavIconSecondary, props);
