import { SunMoonGlyph, SunMoonGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunMoonGlyph, SunMoonGlyphSecondary, props);
