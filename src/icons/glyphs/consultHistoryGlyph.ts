import ConsultHistoryGlyphPrimary from './svgs/consult-history-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ConsultHistoryGlyph = (props: IconProps) =>
  useIcon(ConsultHistoryGlyphPrimary, ConsultHistoryGlyphPrimary, props);
