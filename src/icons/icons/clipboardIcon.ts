import { ClipboardIcon, ClipboardIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClipboardIcon, ClipboardIconSecondary, props);
