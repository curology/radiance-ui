import ArrowLeftIconPrimary from './svgs/arrow-left-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ArrowLeftIcon = (props: IconProps) =>
  useIcon(ArrowLeftIconPrimary, ArrowLeftIconPrimary, props);
