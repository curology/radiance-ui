import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import SegmentedControlReadme from 'docs/segmentedControl';

import DefaultControl from './defaultControl'
import { css } from '@emotion/core';
import { SPACER } from 'src/constants';
const stories = storiesOf('SegmentedControl', module);

stories.addDecorator(withKnobs);

stories.add(
	'Usage',
	withDocs(SegmentedControlReadme, () => (
		<React.Fragment>
			<div css={css`
				margin-bottom: ${SPACER.small};`}>
				<DefaultControl />
			</div>
			<div css={css`
				margin-bottom: ${SPACER.small};`}>
				<DefaultControl width="300px" />
			</div>
		</React.Fragment>
	))
)