import YouTubeIconPrimary from './svgs/you-tube-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const YouTubeIcon = (props: IconProps) =>
  useIcon(YouTubeIconPrimary, YouTubeIconPrimary, props);
