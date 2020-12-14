import { LunchGlyph, LunchGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LunchGlyph, LunchGlyphSecondary, props);
