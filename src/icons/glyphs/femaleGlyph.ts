import { FemaleGlyph, FemaleGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FemaleGlyph, FemaleGlyphSecondary, props);
