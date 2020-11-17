import CalendarIconPrimary from './svgs/calendar-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CalendarIcon = (props: IconProps) =>
  useIcon(CalendarIconPrimary, CalendarIconPrimary, props);
