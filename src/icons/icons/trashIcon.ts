import TrashIconPrimary from './svgs/trash-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TrashIconPrimary, TrashIconPrimary, props);
