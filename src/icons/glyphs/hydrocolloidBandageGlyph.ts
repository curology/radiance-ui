import HydrocolloidBandageGlyphPrimary from './svgs/hydrocolloid-bandage-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HydrocolloidBandageGlyph = (props: IconProps) =>
  useIcon(
    HydrocolloidBandageGlyphPrimary,
    HydrocolloidBandageGlyphPrimary,
    props,
  );
