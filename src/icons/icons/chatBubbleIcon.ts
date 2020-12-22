import { ChatBubbleIcon, ChatBubbleIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChatBubbleIcon, ChatBubbleIconSecondary, props);
