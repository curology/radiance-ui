import React from 'react';
import styled from '@emotion/styled';
import { Toggle } from 'src/shared-components';
import { SPACER } from 'src/constants';

const ToggleContainer = styled.div`
  width: 300px;
  margin: ${SPACER.large} 0;
`;

export const Interactive = () => {
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
  title: 'Toggle',
  component: Toggle,
};
