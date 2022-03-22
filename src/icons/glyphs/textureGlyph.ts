import { TextureGlyph, TextureGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TextureGlyph, TextureGlyphSecondary, props);
