import ChevronIconPrimary from './svgs/chevron-icon.svg';
import ChevronIconSecondary from './svgs/camera-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

// TODO: REMOVE SECONDARY ICON
export const ChevronIcon = (props: IconProps) =>
  useIcon(ChevronIconPrimary, ChevronIconSecondary, props);
