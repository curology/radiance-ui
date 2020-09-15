import React from 'react';

import Style from './style';

type AccordionContainerProps = {
  borderRadius?: string;
  children: React.ReactNode;
  withContainer?: boolean;
};

const AccordionContainer = ({
  borderRadius = '4px',
  children,
  withContainer = true,
}: AccordionContainerProps) =>
  withContainer ? (
    <Style.Container borderRadius={borderRadius}>{children}</Style.Container>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

export default AccordionContainer;
