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
import { MobileDropdown } from 'src/shared-components/dropdown/mobileDropdown';
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
  { value: 1, label: 'First option' },
  { value: 2, label: 'Second option (disabled)', disabled: true },
  { value: '3', label: 'Third option' },
  { value: '4', label: 'Fourth option' },
];

export const Desktop = () => {
  const [selectedOption, setSelectedOption] =
    useState<OptionType['value']>(undefined);

  const onChange = ({ value }: OptionType) => {
    setSelectedOption(value);
  };

  return (
    <DesktopContainer>
      <label>
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

export const Mobile = () => {
  const [selectedOption, setSelectedOption] =
    useState<OptionType['value']>(undefined);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedOptions } = event.target;

    if (selectedOptions.length) {
      setSelectedOption(value);
    }
  };

  return (
    <DropdownContainer>
      <MobileDropdown
        borderRadius="4px"
        value={selectedOption}
        options={options}
        onMobileSelectChange={onChange}
        textAlign="left"
      />
    </DropdownContainer>
  );
};

const DROPDOWN_STORIES: Meta = {
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
          <Description of={MobileDropdown} />
          <Heading>MobileDropdown Props:</Heading>
          <ArgsTable of={MobileDropdown} />
        </React.Fragment>
      ),
    },
  },
};

export default DROPDOWN_STORIES;
