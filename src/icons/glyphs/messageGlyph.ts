import MessageGlyphPrimary from './svgs/message-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessageGlyphPrimary, MessageGlyphPrimary, props);
