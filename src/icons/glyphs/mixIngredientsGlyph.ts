import { MixIngredientsGlyph, MixIngredientsGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MixIngredientsGlyph, MixIngredientsGlyphSecondary, props);
