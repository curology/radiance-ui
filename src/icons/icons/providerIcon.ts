import ProviderIconPrimary from './svgs/provider-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ProviderIcon = (props: IconProps) =>
  useIcon(ProviderIconPrimary, ProviderIconPrimary, props);
