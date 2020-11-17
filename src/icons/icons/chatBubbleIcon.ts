import ChatBubbleIconPrimary from './svgs/chat-bubble-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChatBubbleIconPrimary, ChatBubbleIconPrimary, props);
