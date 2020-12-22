import { NeckGlyph, NeckGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NeckGlyph, NeckGlyphSecondary, props);
