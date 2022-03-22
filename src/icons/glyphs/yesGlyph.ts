import { YesGlyph, YesGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(YesGlyph, YesGlyphSecondary, props);
