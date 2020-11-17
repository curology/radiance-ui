import ArrowIconPrimary from './svgs/arrow.svg';
import ArrowIconSecondary from './svgs/bell-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

// TODO-MA: REPLACE SECONDARY ICON
export const Arrow = (props: IconProps) =>
  useIcon(ArrowIconPrimary, ArrowIconSecondary, props);
