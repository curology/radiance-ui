import { LightbulbGlyphSecondary, LightbulbGlyph } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LightbulbGlyph, LightbulbGlyphSecondary, props);
