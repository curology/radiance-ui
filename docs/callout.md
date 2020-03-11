# Callout

Callouts should be used to provide valuable information or additional context on a page. One of the best examples of a callout is for product recommendations.

## Usage

```jsx
import { Callout } from 'radiance-ui';
import { NeckGlyph } from "radiance-ui/lib/icons";

<Callout>
  Simple callout with <strong>bolded text</strong>
</Callout>

<Callout color={COLORS.primaryTint2}>
  Callout with a <strong>custom color</strong>
</Callout>

<Callout icon={<NeckGlyph width={40} height={40} />}>
  <strong>We recommend</strong> this bundle because you indicated
  concern about <strong>dry skin</strong> and{' '}
  <strong>body acne</strong>
</Callout>
```

<!-- STORY -->

### Proptypes

| prop     | propType | required | default        | description                                                    |
| -------- | -------- | -------- | -------------- | -------------------------------------------------------------- |
| children | node     | yes      | -              | content of the Callout element. It may contain `<strong>` tags |
| color    | string   | no       | COLORS.primary | color of the text and icon                                     |
| icon     | node     | no       | -              | icon displayed inside the callout right aligned                |
