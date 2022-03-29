import { MoisturizerGlyph, MoisturizerGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoisturizerGlyph, MoisturizerGlyphSecondary, props);
