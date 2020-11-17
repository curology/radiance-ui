import MessagesSelectedNavIconPrimary from './svgs/messages-selected-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MessagesSelectedNavIcon = (props: IconProps) =>
  useIcon(
    MessagesSelectedNavIconPrimary,
    MessagesSelectedNavIconPrimary,
    props,
  );
