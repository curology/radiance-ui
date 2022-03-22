import { FirmnessGlyph, FirmnessGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FirmnessGlyph, FirmnessGlyphSecondary, props);
