import { FineLinesGlyph, FineLinesGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FineLinesGlyph, FineLinesGlyphSecondary, props);
