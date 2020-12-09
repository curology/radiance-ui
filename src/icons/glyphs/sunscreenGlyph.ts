import { SunscreenGlyph, SunscreenGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunscreenGlyph, SunscreenGlyphSecondary, props);
