import RocketshipGlyphPrimary from './svgs/rocketship-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const RocketshipGlyph = (props: IconProps) =>
  useIcon(RocketshipGlyphPrimary, RocketshipGlyphPrimary, props);
