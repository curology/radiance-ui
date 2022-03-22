import { CombinationGlyph, CombinationGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CombinationGlyph, CombinationGlyphSecondary, props);
