import { EditIcon, EditIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(EditIcon, EditIconSecondary, props);
