# Banner
### Usage

```jsx
import { Banner } from 'radiance-ui';
<Banner
  content={<div>This is a banner <a href="#">something</a></div>}
  type={select('type', ['success', 'info', 'danger'], 'info')}
  onClick={() => { console.log('banner clicked')}}
/>
```

<!-- STORY -->

### Proptypes
| prop        | propType           | required | default | description                                                                                                                  |
|-------------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| content     | string             | yes      | -       | banner content to be displayed                                                                                               |
| type        | string             | yes      | -       | must be one of: 'success', 'danger', 'info'                                                                                  |
| onClick     | func               | yes      | -       | callback function called on clicking the banner. The function will receive all  of the component's props as the argument     |

### Notes
The `<Banner />` component provides only the styling for and onClick
behavior for banners. Management of what banners are showing on the screen
must be handled from outside of this component. All banners are not dismissable.
