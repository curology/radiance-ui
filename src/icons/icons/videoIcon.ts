import VideoIconPrimary from './svgs/video-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(VideoIconPrimary, VideoIconPrimary, props);
