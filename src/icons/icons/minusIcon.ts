import { MinusIcon, MinusIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MinusIcon, MinusIconSecondary, props);
