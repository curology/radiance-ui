import InstagramIconPrimary from './svgs/instagram-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const InstagramIcon = (props: IconProps) =>
  useIcon(InstagramIconPrimary, InstagramIconPrimary, props);
