import ProfileNavIconPrimary from './svgs/profile-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ProfileNavIcon = (props: IconProps) =>
  useIcon(ProfileNavIconPrimary, ProfileNavIconPrimary, props);
