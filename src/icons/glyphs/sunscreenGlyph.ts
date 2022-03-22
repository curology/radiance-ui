import { SunscreenGlyph, SunscreenGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunscreenGlyph, SunscreenGlyphSecondary, props);
