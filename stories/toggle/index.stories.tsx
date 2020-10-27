import React from 'react';
import styled from 'src/utils/theming/styled';
import { Toggle } from 'src/shared-components';
import { SPACER } from 'src/constants';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';

const ToggleContainer = styled.div`
  width: 300px;
  margin: ${SPACER.large} 0;
`;

export const Usage = () => {
  const [checked, setChecked] = React.useState(false);
  const [secondChecked, setSecondChecked] = React.useState(true);

  const onChange = () => setChecked(!checked);
  const secondOnChange = () => setSecondChecked(!secondChecked);

  return (
    <React.Fragment>
      <ToggleContainer>
        <Toggle
          checked={checked}
          label="Default value: Unchecked"
          onChange={onChange}
        />
      </ToggleContainer>
      <ToggleContainer>
        <Toggle
          checked={secondChecked}
          label="Default value: Checked"
          onChange={secondOnChange}
        />
      </ToggleContainer>
    </React.Fragment>
  );
};

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Toggle } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
