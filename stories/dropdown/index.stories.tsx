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
import { GenericConfigurableDropdown } from 'src/shared-components/dropdown/genericConfigurableDropdown';
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
  { value: '5', label: 'Fifth option' },
  { value: '6', label: 'Sixth option' },
  { value: '7', label: 'Seventh option' },
  { value: '8', label: 'Eighth option' },
  { value: '9', label: 'Nineth option' },
  { value: 10, label: 'Tenth option' },
  { value: 11, label: 'Eleventh option' },
  { value: 12, label: 'Twelveth option' },
  { value: 13, label: 'Thirteenth option' },
  { value: 14, label: 'Fourteenth option' },
  { value: 15, label: 'Fifteenth option' },
  { value: 16, label: 'Sixteenth option' },
  { value: 17, label: 'Seventeenth option' },
  { value: 18, label: 'Eighteenth option' },
  { value: 19, label: 'Nineteenth option' },
  { value: 20, label: 'Twentieth option' },
  { value: '21', label: 'Twenty-First option' },
  { value: '22', label: 'Twenty-Second option' },

];

export const Desktop = () => {
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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control -- TODO: Figure out form/label paradigm */}
      <label style={{ display: 'unset' }}>
        Select an option:
        <GenericConfigurableDropdown
          borderRadius="4px"
          value={selectedOption}
          options={options}
          onSelectChange={onChange}
          preventDisabledDefaultOption={true}
          textAlign="left"
          onDropdownContainerFocus={() => undefined}
        />
      </label>
    </DropdownContainer>
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
          <Description of={GenericConfigurableDropdown} />
          <Heading>MobileDropdown Props:</Heading>
          <ArgsTable of={GenericConfigurableDropdown} />
        </React.Fragment>
      ),
    },
  },
};

export default DROPDOWN_STORIES;
