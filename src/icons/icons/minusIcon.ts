import MinusIconPrimary from './svgs/minus-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const MinusIcon = (props: IconProps) =>
  useIcon(MinusIconPrimary, MinusIconPrimary, props);
