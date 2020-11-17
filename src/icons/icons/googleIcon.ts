import GoogleIconPrimary from './svgs/google-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const GoogleIcon = (props: IconProps) =>
  useIcon(GoogleIconPrimary, GoogleIconPrimary, props);
