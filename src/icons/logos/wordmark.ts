// Secondary Logo and Wordmark are identical
import { LogoSecondary, WordmarkPrimary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(WordmarkPrimary, LogoSecondary, props);
