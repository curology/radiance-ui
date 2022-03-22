import { LunchGlyph, LunchGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LunchGlyph, LunchGlyphSecondary, props);
