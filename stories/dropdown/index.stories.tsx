import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { Dropdown, OptionType } from 'src/shared-components/dropdown';
import type { Meta } from '@storybook/react';

const DropdownContainer = styled.div`
  padding-top: 30px;
  max-width: 500px;
  margin: 0 auto;
`;

const DesktopContainer = styled(DropdownContainer)`
  height: 350px;
`;

const options = [
  { value: -1, label: 'Please select an option', disabled: true },
  { value: 1, label: 'First option' },
  { value: 2, label: 'Second option' },
  { value: '3', label: 'Third option' },
  { value: '4', label: 'Fourth option' },
  { value: '5', label: 'Fifth option' },
];

export const Default = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType['value']>(
    options[0].value,
  );

  const onChange = ({ value }: OptionType) => {
    setSelectedOption(value);
  };

  return (
    <DesktopContainer>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- TODO: Figure out form/label paradigm */}
      <label style={{ display: 'unset' }}>
        Select an option:
        <Dropdown
          value={selectedOption}
          options={options}
          onChange={onChange}
        />
      </label>
    </DesktopContainer>
  );
};

interface DropdownStories extends Meta {
  title: string;
}

const DROPDOWN_STORIES: DropdownStories = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description of={Dropdown} />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Dropdown } from 'radiance-ui';"}
          />
          <Heading>Dropdown Props:</Heading>
          <ArgsTable of={Dropdown} />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default DROPDOWN_STORIES;
