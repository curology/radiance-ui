import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { COLORS } from 'src/constants';
import { Typography } from 'src/shared-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;

const Named = styled.p`
  padding-right: 10px;
  border-right: 1px solid black;
`;

const Default = styled.p`
  padding-left: 5px;
  padding-right: 5px;
`;

const Example = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

// eslint-disable-next-line react/prop-types
const SampleText = ({ component, componentName, styleName }) => {
  const Component = component;

  return (
    <Example>
      <Row>
        <Named>{componentName}</Named>
        <Default>{styleName}</Default>
      </Row>
      <Component>
        THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG
        <br />
        the quick brown fox jumped over the lazy dog
      </Component>
    </Example>
  );
};

const stories = storiesOf('Typography', module);

stories.add(
  'Usage',
  withInfo(`
    These are preconfigured typography styles. They can be used as is or included as part of
    another styled component with overrides.

    ---
    ## Typography Component
    To use the default component for the particular style, import Typography and access
    the component as part of the object's attribute:

    ~~~js
    import { Typography } from 'radiant-ui';

    <Typography.Display>Header 1</Typography.Display>
    ~~~

    ---
    ## Typography Style (css)
    To grab the typography's style to compose as part of an Emotion component, impor
    TypographyStyle and access the style as part of the object's attribute:

    ~~~js
    import styled from 'react-emotion';
    import { TypographyStyle } from 'radiant-ui';

    const newTextStyle = styled.div\`
      \${TypographyStyle.display}
      font-size: 55px;
    \`;
    ~~~
  `)(() => (
    <div style={{ padding: '2rem', backgroundColor: COLORS.background }}>
      <div>
        <Row>
          <Named>Component Name</Named>
          <Default>Style Name</Default>
        </Row>
        <p css="padding-bottom: 16px;">
          Each typography style is exported on the Typography object and
          can be accessed as an attribute of that object. The name of the
          attribute is specified by the “Component Name”. (i.e. Typography.Display,
          Typography.Heading).
        </p>
        <p css="padding-bottom: 16px;">
          Each style is also exported as TypographyStyle object as a css
          class. The styles can be accessed the same way that the components
          are accessed. The name of the attribute is specified by the
          “Style Name”. (i.e. TypographyStyle.display, TypographyStyle.heading)
        </p>
        <p css="padding-bottom: 16px;">See <strong>Show Info</strong> for details.</p>
      </div>

      <hr />

      <SampleText
        component={Typography.Display}
        componentName="Typography.Display"
        styleName="TypographyStyle.display"
      />

      <hr />

      <SampleText
        component={Typography.Heading}
        componentName="Typography.Heading"
        styleName="TypographyStyle.heading"
      />

      <hr />

      <SampleText
        component={Typography.Title}
        componentName="Typography.Title"
        styleName="TypographyStyle.title"
      />

      <hr />

      <SampleText
        component="p"
        componentName="p"
        styleName="TypographyStyle.body"
      />

      <hr />

      <SampleText
        component={Typography.Caption}
        componentName="Typography.Caption"
        styleName="TypographyStyle.caption"
      />

      <hr />

      <SampleText
        component={Typography.ErrorText}
        componentName="Typography.ErrorText"
        styleName="TypographyStyle.error"
      />

      <hr />

      <SampleText
        component={Typography.SuccessText}
        componentName="Typography.SuccessText"
        styleName="TypographyStyle.success"
      />

      <hr />

      <SampleText
        component={Typography.Label}
        componentName="Typography.Label"
        styleName="TypographyStyle.label"
      />

      <hr />

      <SampleText
        component={Typography.ButtonText}
        componentName="Typography.ButtonText"
        styleName="TypographyStyle.button"
      />
    </div>
  ))
);
