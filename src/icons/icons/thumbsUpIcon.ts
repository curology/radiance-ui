import ThumbsUpIconPrimary from './svgs/thumbs-up-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ThumbsUpIcon = (props: IconProps) =>
  useIcon(ThumbsUpIconPrimary, ThumbsUpIconPrimary, props);
