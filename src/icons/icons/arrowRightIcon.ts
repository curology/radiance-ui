import { ArrowRightIcon, ArrowRightIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ArrowRightIcon, ArrowRightIconSecondary, props);
