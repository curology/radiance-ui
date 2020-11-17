import PreviousIconPrimary from './svgs/previous-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PreviousIcon = (props: IconProps) =>
  useIcon(PreviousIconPrimary, PreviousIconPrimary, props);
