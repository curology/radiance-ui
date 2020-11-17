import FaceGlyphPrimary from './svgs/face-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const FaceGlyph = (props: IconProps) =>
  useIcon(FaceGlyphPrimary, FaceGlyphPrimary, props);
