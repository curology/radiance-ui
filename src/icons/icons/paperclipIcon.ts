import PaperclipIconPrimary from './svgs/paperclip-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PaperclipIconPrimary, PaperclipIconPrimary, props);
