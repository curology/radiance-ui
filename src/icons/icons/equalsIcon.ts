import EqualsIconPrimary from './svgs/equals-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const EqualsIcon = (props: IconProps) =>
  useIcon(EqualsIconPrimary, EqualsIconPrimary, props);
