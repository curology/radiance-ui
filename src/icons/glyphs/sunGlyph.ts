import { SunGlyph, SunGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunGlyph, SunGlyphSecondary, props);
