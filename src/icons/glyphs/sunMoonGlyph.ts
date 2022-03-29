import { SunMoonGlyph, SunMoonGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunMoonGlyph, SunMoonGlyphSecondary, props);
