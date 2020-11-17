import SelfieGlyphPrimary from './svgs/selfie-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SelfieGlyph = (props: IconProps) =>
  useIcon(SelfieGlyphPrimary, SelfieGlyphPrimary, props);
