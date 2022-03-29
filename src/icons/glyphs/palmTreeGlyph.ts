import { PalmTreeGlyph, PalmTreeGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PalmTreeGlyph, PalmTreeGlyphSecondary, props);
