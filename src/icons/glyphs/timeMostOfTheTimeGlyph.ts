import {
  TimeMostOfTheTimeGlyph,
  TimeMostOfTheTimeGlyphSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TimeMostOfTheTimeGlyph, TimeMostOfTheTimeGlyphSecondary, props);
