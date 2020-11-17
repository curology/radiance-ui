import GiftIconPrimary from './svgs/gift-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const GiftIcon = (props: IconProps) =>
  useIcon(GiftIconPrimary, GiftIconPrimary, props);
