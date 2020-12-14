import { SearchIcon, SearchIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SearchIcon, SearchIconSecondary, props);
