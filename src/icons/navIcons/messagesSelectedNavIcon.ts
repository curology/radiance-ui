import {
  MessagesSelectedNavIcon,
  MessagesSelectedNavIconSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessagesSelectedNavIcon, MessagesSelectedNavIconSecondary, props);
