import { ProfileNavIcon, ProfileNavIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ProfileNavIcon, ProfileNavIconSecondary, props);
