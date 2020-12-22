import { CourseGlyph, CourseGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CourseGlyph, CourseGlyphSecondary, props);
