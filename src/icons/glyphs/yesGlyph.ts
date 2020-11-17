import YesGlyphPrimary from './svgs/yes-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const YesGlyph = (props: IconProps) =>
  useIcon(YesGlyphPrimary, YesGlyphPrimary, props);
