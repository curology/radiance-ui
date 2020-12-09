import { SometimesGlyph, SometimesGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SometimesGlyph, SometimesGlyphSecondary, props);
