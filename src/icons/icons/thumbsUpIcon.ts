import ThumbsUpIconPrimary from './svgs/thumbs-up-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ThumbsUpIconPrimary, ThumbsUpIconPrimary, props);
