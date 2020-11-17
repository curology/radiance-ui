import LocationIconPrimary from './svgs/location-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const LocationIcon = (props: IconProps) =>
  useIcon(LocationIconPrimary, LocationIconPrimary, props);
