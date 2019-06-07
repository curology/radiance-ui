# TYPOGRAPHY_STYLE
This import is meant to be used to pull in css of the base typography
styles and used in composing Emotion components.

## Usage

```jsx
import styled from '@emotion/styled'
import { TYPOGRAPHY_STYLE } from 'radiance-ui';

export const Container = styled.div`
  ${TYPOGRAPHY_STYLE.body};
  line-height: 1;
`;
```

### Available styles
```jsx
<div css={`TYPOGRAPHY_STYLE.display`}>display</div>
<div css={`TYPOGRAPHY_STYLE.heading`}>heading</div>
<div css={`TYPOGRAPHY_STYLE.title`}>title</div>
<div css={`TYPOGRAPHY_STYLE.body`}>body</div>
<div css={`TYPOGRAPHY_STYLE.caption`}>caption</div>
<div css={`TYPOGRAPHY_STYLE.label`}>label</div>
<div css={`TYPOGRAPHY_STYLE.error`}>error</div>
<div css={`TYPOGRAPHY_STYLE.success`}>success</div>
<div css={`TYPOGRAPHY_STYLE.link`}>link</div>
<div css={`TYPOGRAPHY_STYLE.button`}>button</div>
```

<!-- STORY -->

### Proptypes
N/A

### Notes
Note that these are not actual React components. They are Emotion css
styles that can be used to compose the exact style the design calls for.
