import CloudIconPrimary from './svgs/cloud-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CloudIconPrimary, CloudIconPrimary, props);
