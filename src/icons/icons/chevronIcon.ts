import { ChevronIcon, ChevronIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChevronIcon, ChevronIconSecondary, props);
