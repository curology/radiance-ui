import { FaceGlyph, FaceGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(FaceGlyph, FaceGlyphSecondary, props);
