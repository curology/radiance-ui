import CheckmarkIconPrimary from './svgs/checkmark-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CheckmarkIcon = (props: IconProps) =>
  useIcon(CheckmarkIconPrimary, CheckmarkIconPrimary, props);
