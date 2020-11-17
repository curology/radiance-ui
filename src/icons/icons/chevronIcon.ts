import ChevronIconPrimary from './svgs/chevron-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ChevronIcon = (props: IconProps) =>
  useIcon(ChevronIconPrimary, ChevronIconPrimary, props);
