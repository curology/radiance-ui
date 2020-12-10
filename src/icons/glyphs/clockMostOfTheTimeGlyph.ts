import {
  ClockMostOfTheTimeGlyph,
  ClockMostOfTheTimeGlyphSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockMostOfTheTimeGlyph, ClockMostOfTheTimeGlyphSecondary, props);
