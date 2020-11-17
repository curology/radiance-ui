import TrashIconPrimary from './svgs/trash-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TrashIcon = (props: IconProps) =>
  useIcon(TrashIconPrimary, TrashIconPrimary, props);
