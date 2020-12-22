import { ThumbsDownIcon, ThumbsDownIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ThumbsDownIcon, ThumbsDownIconSecondary, props);
