import {
  ProfileSelectedNavIcon,
  ProfileSelectedNavIconSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ProfileSelectedNavIcon, ProfileSelectedNavIconSecondary, props);
