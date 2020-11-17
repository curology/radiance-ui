import NoMakeupGlyphPrimary from './svgs/no-makeup-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const NoMakeupGlyph = (props: IconProps) =>
  useIcon(NoMakeupGlyphPrimary, NoMakeupGlyphPrimary, props);
