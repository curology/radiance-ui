import { FaceGlyph, FaceGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FaceGlyph, FaceGlyphSecondary, props);
