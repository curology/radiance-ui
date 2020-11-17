import PlayIconPrimary from './svgs/play-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PlayIcon = (props: IconProps) =>
  useIcon(PlayIconPrimary, PlayIconPrimary, props);
