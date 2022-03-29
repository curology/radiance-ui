import { ChestGlyph, ChestGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChestGlyph, ChestGlyphSecondary, props);
