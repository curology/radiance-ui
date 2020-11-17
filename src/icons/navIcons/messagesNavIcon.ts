import MessagesNavIconPrimary from './svgs/messages-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MessagesNavIcon = (props: IconProps) =>
  useIcon(MessagesNavIconPrimary, MessagesNavIconPrimary, props);
