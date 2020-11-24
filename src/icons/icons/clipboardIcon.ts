import { ClipboardIcon } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClipboardIcon, ClipboardIcon, props);
