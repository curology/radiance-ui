import SelfieGlyphPrimary from './svgs/selfie-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SelfieGlyphPrimary, SelfieGlyphPrimary, props);
