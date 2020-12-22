import { LightningIcon, LightningIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LightningIcon, LightningIconSecondary, props);
