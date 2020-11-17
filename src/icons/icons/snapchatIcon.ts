import SnapchatIconPrimary from './svgs/snapchat-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const SnapchatIcon = (props: IconProps) =>
  useIcon(SnapchatIconPrimary, SnapchatIconPrimary, props);
