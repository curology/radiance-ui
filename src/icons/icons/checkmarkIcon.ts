import CheckmarkIconPrimary from './svgs/checkmark-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CheckmarkIconPrimary, CheckmarkIconPrimary, props);
