import { GridIcon, GridIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(GridIcon, GridIconSecondary, props);
