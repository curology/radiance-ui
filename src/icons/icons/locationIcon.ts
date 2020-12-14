import { LocationIcon, LocationIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LocationIcon, LocationIconSecondary, props);
