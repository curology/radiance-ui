import { MoisturizerGlyph, MoisturizerGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoisturizerGlyph, MoisturizerGlyphSecondary, props);
