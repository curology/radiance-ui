import { ConsultHistoryGlyph, ConsultHistoryGlyphSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ConsultHistoryGlyph, ConsultHistoryGlyphSecondary, props);
