import { IconProps, useIcon } from '../../shared-components/icon';
import WordmarkPrimary from './svgs/wordmark.svg';

export const Wordmark = (props: IconProps) =>
  useIcon(WordmarkPrimary, WordmarkPrimary, props);
