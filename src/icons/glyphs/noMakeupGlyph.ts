import { NoMakeupGlyph, NoMakeupGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NoMakeupGlyph, NoMakeupGlyphSecondary, props);
