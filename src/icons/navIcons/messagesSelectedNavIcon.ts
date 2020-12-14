import {
  MessagesSelectedNavIcon,
  MessagesSelectedNavIconSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessagesSelectedNavIcon, MessagesSelectedNavIconSecondary, props);
