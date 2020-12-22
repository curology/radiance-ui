import { PlusIcon, PlusIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PlusIcon, PlusIconSecondary, props);
