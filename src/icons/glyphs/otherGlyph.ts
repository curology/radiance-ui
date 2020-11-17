import OtherGlyphPrimary from './svgs/other-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const OtherGlyph = (props: IconProps) =>
  useIcon(OtherGlyphPrimary, OtherGlyphPrimary, props);
