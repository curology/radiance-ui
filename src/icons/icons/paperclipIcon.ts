import PaperclipIconPrimary from './svgs/paperclip-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PaperclipIcon = (props: IconProps) =>
  useIcon(PaperclipIconPrimary, PaperclipIconPrimary, props);
