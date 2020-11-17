import CourseGlyphPrimary from './svgs/course-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CourseGlyph = (props: IconProps) =>
  useIcon(CourseGlyphPrimary, CourseGlyphPrimary, props);
