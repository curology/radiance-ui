import MaleGlyphPrimary from './svgs/male-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MaleGlyph = (props: IconProps) =>
  useIcon(MaleGlyphPrimary, MaleGlyphPrimary, props);
