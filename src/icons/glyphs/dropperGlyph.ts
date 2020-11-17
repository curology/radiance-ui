import DropperGlyphPrimary from './svgs/dropper-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const DropperGlyph = (props: IconProps) =>
  useIcon(DropperGlyphPrimary, DropperGlyphPrimary, props);
