import ProfileSelectedNavIconPrimary from './svgs/profile-selected-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ProfileSelectedNavIcon = (props: IconProps) =>
  useIcon(ProfileSelectedNavIconPrimary, ProfileSelectedNavIconPrimary, props);
