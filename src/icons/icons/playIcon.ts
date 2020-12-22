import { PlayIcon, PlayIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PlayIcon, PlayIconSecondary, props);
