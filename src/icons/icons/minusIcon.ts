import MinusIconPrimary from './svgs/minus-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MinusIconPrimary, MinusIconPrimary, props);
