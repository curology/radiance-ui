import { DropIcon, DropIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(DropIcon, DropIconSecondary, props);
