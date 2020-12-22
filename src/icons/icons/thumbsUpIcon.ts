import { ThumbsUpIcon, ThumbsUpIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ThumbsUpIcon, ThumbsUpIconSecondary, props);
