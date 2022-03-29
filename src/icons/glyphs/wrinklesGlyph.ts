import { WrinklesGlyph, WrinklesGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(WrinklesGlyph, WrinklesGlyphSecondary, props);
