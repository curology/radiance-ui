import { ClockAlwaysGlyph, ClockAlwaysGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockAlwaysGlyph, ClockAlwaysGlyphSecondary, props);
