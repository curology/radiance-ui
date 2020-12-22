import { TextureGlyph, TextureGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TextureGlyph, TextureGlyphSecondary, props);
