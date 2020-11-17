import TreatmentIconPrimary from './svgs/treatment-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TreatmentIcon = (props: IconProps) =>
  useIcon(TreatmentIconPrimary, TreatmentIconPrimary, props);
