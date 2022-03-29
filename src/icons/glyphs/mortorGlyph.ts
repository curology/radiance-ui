import { MortorGlyph, MortorGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MortorGlyph, MortorGlyphSecondary, props);
