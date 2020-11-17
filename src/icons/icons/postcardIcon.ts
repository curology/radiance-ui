import PostcardIconPrimary from './svgs/postcard-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PostcardIconPrimary, PostcardIconPrimary, props);
