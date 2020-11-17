import MortorGlyphPrimary from './svgs/mortor-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MortorGlyph = (props: IconProps) =>
  useIcon(MortorGlyphPrimary, MortorGlyphPrimary, props);
