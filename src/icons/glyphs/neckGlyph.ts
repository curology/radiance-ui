import { NeckGlyph, NeckGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NeckGlyph, NeckGlyphSecondary, props);
