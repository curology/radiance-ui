# Callout

Callouts should be used to provide valuable information or additional context on a page. One of the best examples of a callout is for product recommendations.

## Usage

```jsx
import { Callout } from 'radiance-ui';
import { NeckGlyph } from "radiance-ui/lib/icons";

<Callout.Container>
  <Callout>
    Simple callout with <strong>bolded text</strong>
  </Callout>
</Callout.Container>

<Callout.Container>
  <Callout color={COLORS.primaryTint2}>
    Callout with a <strong>custom color</strong>
  </Callout>
</Callout.Container>

<Callout.Container>
  <Callout icon={<NeckGlyph width={48} height={48} />}>
    <strong>We recommend</strong> this bundle because you indicated
    concern about <strong>dry skin</strong> and{' '}
    <strong>body acne</strong>
  </Callout>
</Callout.Container>

<Callout>
  This Callout will strech 100% the width of the parent container.
</Callout>
```

<!-- STORY -->

### Proptypes

| prop     | propType | required | default        | description                                                    |
| -------- | -------- | -------- | -------------- | -------------------------------------------------------------- |
| children | node     | yes      | -              | content of the Callout element. It may contain `<strong>` tags |
| color    | string   | no       | COLORS.primary | color of the text and icon                                     |
| icon     | node     | no       | -              | icon displayed inside the callout right aligned                |

### Notes

`Callout` will cover the entirety of the container that holds it. You may optionally wrap it with `Callout.Container` which will set the `max-width` to `327px`.
If you use a glyph as callout icon the recommended dimesions are 48x48 pixels.
