import { DarkSpotsGlyph, DarkSpotsGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(DarkSpotsGlyph, DarkSpotsGlyphSecondary, props);
