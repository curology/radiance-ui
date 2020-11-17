import FemaleGlyphPrimary from './svgs/female-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const FemaleGlyph = (props: IconProps) =>
  useIcon(FemaleGlyphPrimary, FemaleGlyphPrimary, props);
