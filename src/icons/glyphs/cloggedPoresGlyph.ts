import { CloggedPoresGlyph, CloggedPoresGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CloggedPoresGlyph, CloggedPoresGlyphSecondary, props);
