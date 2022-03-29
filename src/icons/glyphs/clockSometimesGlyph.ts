import { ClockSometimesGlyph, ClockSometimesGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockSometimesGlyph, ClockSometimesGlyphSecondary, props);
