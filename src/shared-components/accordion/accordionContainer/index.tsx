import React from 'react';

import Style from './style';

type AccordionContainerProps = {
  children: React.ReactNode;
  withContainer?: boolean;
};

const AccordionContainer = ({
  children,
  withContainer = true,
}: AccordionContainerProps) =>
  withContainer ? (
    <Style.Container>{children}</Style.Container>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

export default AccordionContainer;
