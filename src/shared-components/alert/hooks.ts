import { useEffect, useRef } from 'react';

import type { AlertProps } from '.';

export const useTruncateText = (
  truncateText: NonNullable<AlertProps['truncateText']>,
) => {
  const contentText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (truncateText) {
      const contentElement = contentText.current;
      if (contentElement) {
        const initialWords = contentElement.innerHTML;
        const wordsArray = initialWords.split(' ');
        /**
         * TODO: Find better contentValues values for the logic.
         * Secondary Theme truncated content gets stuck in the while loop because
         * there are different dimensions at play.
         */
        const ARBITRARY_SECONDARY_OFFSET = 5;
        while (
          contentElement.scrollHeight >
            contentElement.offsetHeight + ARBITRARY_SECONDARY_OFFSET &&
          wordsArray.length !== 0
        ) {
          wordsArray.pop();
          contentElement.innerHTML = `${wordsArray.join(' ')}...`;
        }

        /**
         * If while loop pops all words due to element dimensions,
         * prefer resetting without truncating to potentially
         * broken functionality
         */
        if (wordsArray.length === 0) {
          contentElement.innerHTML = initialWords;
        }
      }
    }
  });

  return { contentText };
};
