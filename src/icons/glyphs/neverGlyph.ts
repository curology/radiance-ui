import { NeverGlyph, NeverGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NeverGlyph, NeverGlyphSecondary, props);
