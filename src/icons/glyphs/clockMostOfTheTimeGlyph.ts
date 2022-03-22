import {
  ClockMostOfTheTimeGlyph,
  ClockMostOfTheTimeGlyphSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockMostOfTheTimeGlyph, ClockMostOfTheTimeGlyphSecondary, props);
