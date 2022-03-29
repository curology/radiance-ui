import { LockGlyph, LockGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LockGlyph, LockGlyphSecondary, props);
