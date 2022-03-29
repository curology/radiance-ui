import { KojicAcidGlyph, KojicAcidGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(KojicAcidGlyph, KojicAcidGlyphSecondary, props);
