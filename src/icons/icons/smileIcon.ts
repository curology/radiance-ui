import { SmileIcon, SmileIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SmileIcon, SmileIconSecondary, props);
