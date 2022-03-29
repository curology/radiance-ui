import { MaleGlyph, MaleGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MaleGlyph, MaleGlyphSecondary, props);
