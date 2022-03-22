import { SelfieGlyph, SelfieGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SelfieGlyph, SelfieGlyphSecondary, props);
