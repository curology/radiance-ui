import SearchIconPrimary from './svgs/search-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SearchIconPrimary, SearchIconPrimary, props);
