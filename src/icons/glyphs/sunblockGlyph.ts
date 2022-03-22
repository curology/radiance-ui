import { SunblockGlyph, SunblockGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunblockGlyph, SunblockGlyphSecondary, props);
