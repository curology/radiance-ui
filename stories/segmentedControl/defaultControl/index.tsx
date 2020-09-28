import React from 'react';
import { css } from '@emotion/core';

import { SegmentedControl } from 'src/shared-components';
import { SegmentItemType } from 'src/shared-components/segmentedControl/types';

type DefaultControlProps = {
  width?: string;
  segmentItems: SegmentItemType[];
};

const DefaultControl: React.FC<DefaultControlProps> = ({
  width = '500px',
  segmentItems,
}) => {
  return (
    <div
      css={css`
        width: ${width};
      `}
    >
      <SegmentedControl segmentItems={segmentItems} initialActiveId={1} />
    </div>
  );
};

export default DefaultControl;
