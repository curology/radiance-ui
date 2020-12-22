import { SunGlyph, SunGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunGlyph, SunGlyphSecondary, props);
