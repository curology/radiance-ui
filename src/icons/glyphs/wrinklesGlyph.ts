import WrinklesGlyphPrimary from './svgs/wrinkles-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const WrinklesGlyph = (props: IconProps) =>
  useIcon(WrinklesGlyphPrimary, WrinklesGlyphPrimary, props);
