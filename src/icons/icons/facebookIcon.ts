import FacebookIconPrimary from './svgs/facebook-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const FacebookIcon = (props: IconProps) =>
  useIcon(FacebookIconPrimary, FacebookIconPrimary, props);
