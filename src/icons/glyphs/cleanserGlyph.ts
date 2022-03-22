import { CleanserGlyph, CleanserGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CleanserGlyph, CleanserGlyphSecondary, props);
