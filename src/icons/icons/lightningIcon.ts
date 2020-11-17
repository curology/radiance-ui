import LightningIconPrimary from './svgs/lightning-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LightningIconPrimary, LightningIconPrimary, props);
