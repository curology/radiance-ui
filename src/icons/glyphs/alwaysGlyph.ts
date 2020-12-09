import { AlwaysGlyph, AlwaysGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(AlwaysGlyph, AlwaysGlyphSecondary, props);
