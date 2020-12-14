import { MessageGlyph, MessageGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessageGlyph, MessageGlyphSecondary, props);
