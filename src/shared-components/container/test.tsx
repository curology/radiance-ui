import React from 'react';
import { render } from 'src/tests/testingLibraryHelpers';

import { Container } from './index';

describe('Container UI snapshots', () => {
  it('renders basic container', () => {
    const { container } = render(<Container>Container Content</Container>);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders container helper components', () => {
    const { container } = render(
      <Container>
        <Container.Section>Section 1</Container.Section>
        <Container.Divider />

        <Container.Image src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg" />
        <Container.Section>
          <div>Section 2</div>
        </Container.Section>
      </Container>,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders clickable container', () => {
    const { container } = render(
      <Container type="clickable">Container Content</Container>,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('renders message type container', () => {
    const { container } = render(
      <Container type="message">Container Content</Container>,
    );

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
