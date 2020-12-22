import { CombinationGlyph, CombinationGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CombinationGlyph, CombinationGlyphSecondary, props);
