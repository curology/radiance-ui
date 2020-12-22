import { SelfieGlyph, SelfieGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SelfieGlyph, SelfieGlyphSecondary, props);
