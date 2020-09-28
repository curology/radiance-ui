import React from 'react';
import { css } from '@emotion/core';

import { SegmentedControl } from 'src/shared-components';

type DefaultControlProps = {
  width?: string;
};

const DefaultControl: React.FC<DefaultControlProps> = ({ width = '500px' }) => {
  const segmentItems = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
  ];

  return (
    <div
      css={css`
        width: ${width};
      `}
    >
      <SegmentedControl segmentItems={segmentItems} initialActiveId={2} />
    </div>
  );
};

export default DefaultControl;
