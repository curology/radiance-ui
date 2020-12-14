import { LockGlyph, LockGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LockGlyph, LockGlyphSecondary, props);
