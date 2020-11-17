import InstagramIconPrimary from './svgs/instagram-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(InstagramIconPrimary, InstagramIconPrimary, props);
