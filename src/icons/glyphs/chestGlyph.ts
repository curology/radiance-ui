import ChestGlyphPrimary from './svgs/chest-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ChestGlyph = (props: IconProps) =>
  useIcon(ChestGlyphPrimary, ChestGlyphPrimary, props);
