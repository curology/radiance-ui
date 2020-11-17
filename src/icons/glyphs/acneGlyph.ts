import AcneGlyphPrimary from './svgs/acne-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const AcneGlyph = (props: IconProps) =>
  useIcon(AcneGlyphPrimary, AcneGlyphPrimary, props);
