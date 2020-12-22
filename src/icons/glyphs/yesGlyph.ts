import { YesGlyph, YesGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(YesGlyph, YesGlyphSecondary, props);
