import { FirmnessGlyph, FirmnessGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FirmnessGlyph, FirmnessGlyphSecondary, props);
