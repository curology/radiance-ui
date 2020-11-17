import LockGlyphPrimary from './svgs/lock-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const LockGlyph = (props: IconProps) =>
  useIcon(LockGlyphPrimary, LockGlyphPrimary, props);
