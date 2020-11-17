import MixIngredientsGlyphPrimary from './svgs/mix-ingredients-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MixIngredientsGlyph = (props: IconProps) =>
  useIcon(MixIngredientsGlyphPrimary, MixIngredientsGlyphPrimary, props);
