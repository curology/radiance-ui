import EditIconPrimary from './svgs/edit-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(EditIconPrimary, EditIconPrimary, props);
