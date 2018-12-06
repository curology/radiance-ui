import React from 'react';
import renderer from 'react-test-renderer';

import { Container, ClickableContainer, MessageContainer } from './index';

describe('Container UI snapshots', () => {
  test('renders basic container', () => {
    const component = renderer.create(<Container>Container Content</Container>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders container helper components', () => {
    const component = renderer.create(
      <Container>
        <Container.Section>
          Section 1
        </Container.Section>
        <Container.Divider />

        <Container.Image src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <Container.Section>
          <div>Section 2</div>
        </Container.Section>
      </Container>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('ClickableContainer UI snapshots', () => {
  test('renders basic container', () => {
    const component = renderer.create(<ClickableContainer>Container Content</ClickableContainer>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders ClickableContainer helper components', () => {
    const component = renderer.create(
      <ClickableContainer>
        <ClickableContainer.Section>
          Section 1
        </ClickableContainer.Section>
        <ClickableContainer.Divider />

        <ClickableContainer.Image src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <ClickableContainer.Section>
          <div>Section 2</div>
        </ClickableContainer.Section>
      </ClickableContainer>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('MessageContainer UI snapshots', () => {
  test('renders basic container', () => {
    const component = renderer.create(<MessageContainer>Container Content</MessageContainer>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders MessageContainer helper components', () => {
    const component = renderer.create(
      <MessageContainer>
        <MessageContainer.Section>
          Section 1
        </MessageContainer.Section>
        <MessageContainer.Divider />

        <MessageContainer.Image src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <MessageContainer.Section>
          <div>Section 2</div>
        </MessageContainer.Section>
      </MessageContainer>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


