import { MaleGlyph, MaleGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MaleGlyph, MaleGlyphSecondary, props);
