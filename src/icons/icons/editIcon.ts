import EditIconPrimary from './svgs/edit-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const EditIcon = (props: IconProps) =>
  useIcon(EditIconPrimary, EditIconPrimary, props);
