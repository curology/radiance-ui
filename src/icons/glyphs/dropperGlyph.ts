import { DropperGlyph, DropperGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(DropperGlyph, DropperGlyphSecondary, props);
