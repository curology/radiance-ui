import GridIconPrimary from './svgs/grid-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const GridIcon = (props: IconProps) =>
  useIcon(GridIconPrimary, GridIconPrimary, props);
