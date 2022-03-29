import { ClockAlwaysGlyph, ClockAlwaysGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockAlwaysGlyph, ClockAlwaysGlyphSecondary, props);
