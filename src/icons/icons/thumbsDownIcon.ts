import ThumbsDownIconPrimary from './svgs/thumbs-down-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ThumbsDownIcon = (props: IconProps) =>
  useIcon(ThumbsDownIconPrimary, ThumbsDownIconPrimary, props);
