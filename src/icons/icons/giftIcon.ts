import { GiftIcon, GiftIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(GiftIcon, GiftIconSecondary, props);
