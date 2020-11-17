import TwitterIconPrimary from './svgs/twitter-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TwitterIcon = (props: IconProps) =>
  useIcon(TwitterIconPrimary, TwitterIconPrimary, props);
