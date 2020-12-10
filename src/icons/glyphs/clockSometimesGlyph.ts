import { ClockSometimesGlyph, ClockSometimesGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockSometimesGlyph, ClockSometimesGlyphSecondary, props);
