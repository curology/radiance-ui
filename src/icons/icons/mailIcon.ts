import MailIconPrimary from './svgs/mail-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MailIconPrimary, MailIconPrimary, props);
