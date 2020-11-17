import MicIconPrimary from './svgs/mic-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MicIconPrimary, MicIconPrimary, props);
