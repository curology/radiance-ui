import ChevronIconPrimary from './svgs/chevron-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChevronIconPrimary, ChevronIconPrimary, props);
