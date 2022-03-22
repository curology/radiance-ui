import { LightbulbGlyph, LightbulbGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LightbulbGlyph, LightbulbGlyphSecondary, props);
