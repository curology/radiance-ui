import { VideoIcon, VideoIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(VideoIcon, VideoIconSecondary, props);
