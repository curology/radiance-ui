import TextureGlyphPrimary from './svgs/texture-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const TextureGlyph = (props: IconProps) =>
  useIcon(TextureGlyphPrimary, TextureGlyphPrimary, props);
