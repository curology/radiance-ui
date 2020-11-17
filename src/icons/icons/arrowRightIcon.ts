import ArrowRightIconPrimary from './svgs/arrow-right-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ArrowRightIcon = (props: IconProps) =>
  useIcon(ArrowRightIconPrimary, ArrowRightIconPrimary, props);
