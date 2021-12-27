import { css } from '@emotion/react';

import { TYPOGRAPHY_STYLE } from '../../../typography';
import type { ThemeType } from '../../../../constants';

/**
 * TODO: Consolidate, fully, this specific link style with TYPOGRAPHY_STYLE.link,
 * or otherwise figure out how to maintain meaningful distinction.
 */
const anchorLinkButton = (theme: ThemeType) => css`
  ${TYPOGRAPHY_STYLE.link(theme)};
  background: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
  font-size: ${theme.TYPOGRAPHY.fontSize.link};
  border-radius: ${theme.BORDER_RADIUS.small};
`;

export default {
  anchorLinkButton,
};
