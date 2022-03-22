import { ClockNeverGlyph, ClockNeverGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockNeverGlyph, ClockNeverGlyphSecondary, props);
