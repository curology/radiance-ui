import HydratingMaskGlyphPrimary from './svgs/hydrating-mask-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HydratingMaskGlyph = (props: IconProps) =>
  useIcon(HydratingMaskGlyphPrimary, HydratingMaskGlyphPrimary, props);
