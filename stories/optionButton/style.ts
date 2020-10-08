import styled from '@emotion/styled';

const ExampleContainer = styled.div`
  margin: 0 auto;
  max-width: 350px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 350px;
  }
`;

export default {
  ExampleContainer,
  FlexContainer,
  OptionsContainer,
};
