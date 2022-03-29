import { AcneGlyph, AcneGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(AcneGlyph, AcneGlyphSecondary, props);
