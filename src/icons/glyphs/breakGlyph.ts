import { BreakGlyph, BreakGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(BreakGlyph, BreakGlyphSecondary, props);
