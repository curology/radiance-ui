import DropIconPrimary from './svgs/drop-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const DropIcon = (props: IconProps) =>
  useIcon(DropIconPrimary, DropIconPrimary, props);
