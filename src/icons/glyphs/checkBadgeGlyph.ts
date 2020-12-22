import { CheckBadgeGlyph, CheckBadgeGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CheckBadgeGlyph, CheckBadgeGlyphSecondary, props);
