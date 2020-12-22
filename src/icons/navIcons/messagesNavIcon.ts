import { MessagesNavIcon, MessagesNavIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessagesNavIcon, MessagesNavIconSecondary, props);
