import MessageGlyphPrimary from './svgs/message-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MessageGlyph = (props: IconProps) =>
  useIcon(MessageGlyphPrimary, MessageGlyphPrimary, props);
