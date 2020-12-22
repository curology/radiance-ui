import { PaperclipIcon, PaperclipIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PaperclipIcon, PaperclipIconSecondary, props);
