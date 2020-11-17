import ContrastIconPrimary from './svgs/contrast-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ContrastIconPrimary, ContrastIconPrimary, props);
