import { PackagingGlyph, PackagingGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PackagingGlyph, PackagingGlyphSecondary, props);
