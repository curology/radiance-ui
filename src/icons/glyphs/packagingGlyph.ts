import { PackagingGlyph, PackagingGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PackagingGlyph, PackagingGlyphSecondary, props);
