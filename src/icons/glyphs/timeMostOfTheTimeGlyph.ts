import {
  TimeMostOfTheTimeGlyph,
  TimeMostOfTheTimeGlyphSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TimeMostOfTheTimeGlyph, TimeMostOfTheTimeGlyphSecondary, props);
