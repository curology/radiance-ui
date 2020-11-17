import LightningIconPrimary from './svgs/lightning-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const LightningIcon = (props: IconProps) =>
  useIcon(LightningIconPrimary, LightningIconPrimary, props);
