# Banner

## Usage

```jsx
import { Banner } from 'radiance-ui';
<Banner
  content={
    <React.Fragment>
      <strong>Default banner:</strong> This is the banner content
    </React.Fragment>
  }
/>
<Banner
  onClick={() => alert('clicked!')}
  content={
    <React.Fragment>
      <strong>Clickable banner</strong> This is a banner with an onClick prop
    </React.Fragment>
  }
/>
<Banner
  content={
    <React.Fragment>
      <strong>Success banner:</strong> This is the banner content
    </React.Fragment>
  }
  type="success"
/>
<Banner
  content={
    <React.Fragment>
      <strong>Error Banner:</strong> This is the banner content
    </React.Fragment>
  }
  type="error"
/>
```

<!-- STORY -->

### Proptypes

| prop    | propType | required | default | description                                      |
| ------- | -------- | -------- | ------- | ------------------------------------------------ |
| content | node     | yes      | -       | banner content to be displayed                   |
| type    | string   | no       | default | must be one of: 'default', 'success', 'error''   |
| onClick | func     | no       | ()=>{}  | callback function called on clicking the banner. |

### Notes

The `<Banner />` component provides only the styling for and onClick
behavior for banners. Management of what banners are showing on the screen
must be handled from outside of this component. All banners are not dismissable.
