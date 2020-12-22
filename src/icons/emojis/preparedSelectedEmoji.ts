import { PreparedSelectedEmoji, PreparedSelectedEmojiSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PreparedSelectedEmoji, PreparedSelectedEmojiSecondary, props);
