import { VeryDryGlyph, VeryDryGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(VeryDryGlyph, VeryDryGlyphSecondary, props);
