import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { COLORS } from 'src/constants';
import {
  DisplayText,
  HeadingText,
  Title,
  Caption,
  ErrorText,
  SuccessText,
  Label,
  ButtonText,
} from 'src/shared-components/typography';

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
  'Styles',
  withInfo(`
    # Usage
    These are preconfigured typography styles. They can be used as is or included as part of
    another styled component with overrides.
    ~~~js
    <br />
    ~~~
    ---
    ## Named Export (default styling)
    To use them as is, import the named export. All named import components accept color as a prop for easy override.
    ~~~js
    <br />
    ~~~

    ~~~js
    import { HeadingText } from 'shared-components/typography';

    < HeadingText >Header 1< /HeadingText >
    < HeadingText color="red">Header 1< /HeadingText >
    ~~~
    ~~~js
    <br />
    ~~~

    ---
    ## Default Export (override styling)
    To use them as a base style with overrides, import the default export and use it as part
    of the styled component definition.
    ~~~js
    <br />
    ~~~

    ~~~js
    import styled from 'react-emotion';
    import TYPOGRAPHY from 'shared-components/typography';

    const newTextStyle = styled.div\`
      \${TYPOGRAPHY.heading}
      font-size: 55px;
    \`;
    ~~~

    ~~~js
    <br />
    ~~~
  `)(() => (
    <div style={{ padding: '2rem', backgroundColor: COLORS.background }}>
      <div>
        <Row>
          <Named>Named Import</Named>
          <Default>Default Import key name</Default>
        </Row>
        <p css="padding-bottom: 8px;">
          Each typography style is exported as a styled component named export,
          specified by the first name (i.e. DisplayText, HeadingText).
        </p>
        <p css="padding-bottom: 8px;">
          Each style is also exported as part of the default object as a css
          class. The key is specified by the second name (i.e. display,
          heading).
        </p>
        <p css="padding-bottom: 8px;">See more info for details.</p>
      </div>

      <hr />

      <SampleText
        component={DisplayText}
        componentName="DisplayText"
        styleName="display"
      />

      <hr />

      <SampleText
        component={HeadingText}
        componentName="HeadingText"
        styleName="heading"
      />

      <hr />

      <SampleText component={Title} componentName="Title" styleName="title" />

      <hr />

      <SampleText component={Title} componentName="Title" styleName="title" />

      <hr />

      <SampleText component="p" componentName="p" styleName="body" />

      <hr />

      <SampleText
        component={Caption}
        componentName="Caption"
        styleName="caption"
      />

      <hr />

      <SampleText
        component={ErrorText}
        componentName="ErrorText"
        styleName="error"
      />

      <hr />

      <SampleText
        component={SuccessText}
        componentName="SuccessText"
        styleName="success"
      />

      <hr />

      <SampleText component={Label} componentName="Label" styleName="label" />

      <hr />

      <SampleText
        component={ButtonText}
        componentName="ButtonText"
        styleName="button"
      />
    </div>
  ))
);
