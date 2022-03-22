import { CourseGlyph, CourseGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CourseGlyph, CourseGlyphSecondary, props);
