import React from 'react';
import { css } from '@emotion/core';

import { SegmentedControl } from 'src/shared-components';

const DefaultControl: React.FC = ({ width = '500px' }: {width: string}) => {
		const segmentItems = [
			{ id: 1, text: 'Option 1' },
			{ id: 2, text: 'Option 2' },
			{ id: 3, text: 'Option 3' },
		  ];

		  return (
			  <div
				  css={css`
				 	width: ${width}; 
				  `}>
					  <SegmentedControl segmentItems={segmentItems} />
				  </div>
		  )
}

export default DefaultControl