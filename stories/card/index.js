import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import CardReadme from 'docs/card.md';
import { Card } from 'src/shared-components';

const stories = storiesOf('Card', module);

stories.add(
  'Usage',
  withDocs(CardReadme, () => (
    <section>
      <div css="max-width: 500px; margin: 0 auto 2rem;">
        <Card>
          <Card.Image src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" width="500" height="150" />
          <Card.Section>
            <Card.Row>
              This is some text
            </Card.Row>
          </Card.Section>
          <Card.Section>
            <Card.Row>
              More text is here
            </Card.Row>
            <Card.Row>
              And even more text is here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, atque consectetur corporis eos error, id in ipsum labore laboriosam laudantium natus nulla perferendis placeat quos recusandae sed sit voluptatum!
            </Card.Row>
          </Card.Section>
        </Card>
      </div>
      <div css="max-width: 750px; margin: 0 auto;">
        <Card columns>
          <Card.Column>
            <Card.Image src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" width="500" />
          </Card.Column>
          <Card.Column>
            <Card.Section>
              <Card.Row>
                This is some text
              </Card.Row>
            </Card.Section>
            <Card.Section>
              <Card.Row>
                More text is here
              </Card.Row>
              <Card.Row>
                And even more text is here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores, atque consectetur corporis eos error, id in ipsum labore laboriosam laudantium natus nulla perferendis placeat quos recusandae sed sit voluptatum!
              </Card.Row>
            </Card.Section>
          </Card.Column>
        </Card>
      </div>
    </section>
  ))
);
