import { MessageGlyph, MessageGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MessageGlyph, MessageGlyphSecondary, props);
