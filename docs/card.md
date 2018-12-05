# Card
### Usage

```jsx
import { Card } from 'radiance-ui';

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
```

<!-- STORY -->

### Proptypes
| prop      | propType           | required | default | description                                                                                                                  |
|-----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| children  | element            | yes      | -       | elements to be rendered in card                                                                                              |
| columns   | bool               | no       | -       | whether the layout should have columns                                                                                       |
| onClick   | func               | no       | -       | card click handler                                                                                                           |

### Notes
The `<Card />` component is a very flexible component that does not
enforce many opinions on how it should be used. There are some sub-components
that may be used to construct the element, but also you may construct additional
components to be rendered in the Card
