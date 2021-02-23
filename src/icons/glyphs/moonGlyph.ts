import { MoonGlyph, MoonGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoonGlyph, MoonGlyphSecondary, props);
