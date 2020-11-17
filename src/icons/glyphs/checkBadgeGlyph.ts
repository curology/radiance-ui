import CheckBadgeGlyphPrimary from './svgs/check-badge-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CheckBadgeGlyph = (props: IconProps) =>
  useIcon(CheckBadgeGlyphPrimary, CheckBadgeGlyphPrimary, props);
