import CloudIconPrimary from './svgs/cloud-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const CloudIcon = (props: IconProps) =>
  useIcon(CloudIconPrimary, CloudIconPrimary, props);
