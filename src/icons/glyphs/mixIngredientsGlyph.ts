import { MixIngredientsGlyph, MixIngredientsGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MixIngredientsGlyph, MixIngredientsGlyphSecondary, props);
