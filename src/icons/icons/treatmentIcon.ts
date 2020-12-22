import { TreatmentIcon, TreatmentIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TreatmentIcon, TreatmentIconSecondary, props);
