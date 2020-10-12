import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Accordion } from 'src/shared-components';
import { SPACER } from 'src/constants';
import accountImage from 'shared/account.png';
import personImage from 'shared/person.jpg';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${SPACER.medium} ${SPACER.large};
  padding-right: 0;
  width: 100%;
  min-height: ${SPACER.x4large};
`;

const AccordionSpacer = styled.div`
  margin: 1rem 0;
`;

export const ThumbnailsAccordion = () => {
  const [isOpen, setIsOpen] = useState({
    0: false,
    1: false,
    2: false,
  });

  const toggleAccordion = (num: number) => () =>
    setIsOpen({ ...isOpen, [num]: !isOpen[num] });

  const srcs = [personImage, accountImage, personImage];

  return (
    <React.Fragment>
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>One Image</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs.slice(0, 1)} />
            </TitleWrapper>
          }
          isOpen={isOpen[0]}
          onClick={toggleAccordion(0)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
      <AccordionSpacer />
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>Two Images</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs.slice(0, 2)} />
            </TitleWrapper>
          }
          isOpen={isOpen[1]}
          onClick={toggleAccordion(1)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
      <AccordionSpacer />
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>Three Images</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs} />
            </TitleWrapper>
          }
          isOpen={isOpen[2]}
          onClick={toggleAccordion(2)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
    </React.Fragment>
  );
};
