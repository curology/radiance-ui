import { CloudIcon, CloudIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CloudIcon, CloudIconSecondary, props);
