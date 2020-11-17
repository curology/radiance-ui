import ArrowIconPrimary from './svgs/arrow.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const Arrow = (props: IconProps) =>
  useIcon(ArrowIconPrimary, ArrowIconPrimary, props);
