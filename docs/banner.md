# Banner
### Usage

```jsx
import { Banner } from 'radiance-ui';

<Banner.Container>
  <Banner
    text="Your photos were uploaded successfully!"
    type="success"
    duration={4}
    onExit={() => {}}
  />
  <Banner
    text="Your photos were uploaded successfully!"
    type="success"
    duration="sticky"
    onExit={() => {}}
  />
  <Banner
    text="Support has been notified."
    type="info"
    duration="sticky"
    onExit={() => {}}
  />
  <Banner
    text="Oops! We couldn't update your information!"
    type="danger"
    duration="sticky"
    onExit={() => {}}
  />
</Banner.Container>
  <Banner
    text="This is a unconstrainted banner"
    type="danger"
    duration="sticky"
    fullWidth
    onExit={() => {}}
  />
```

<!-- STORY -->

### Proptypes
| prop     | propType           | required | default | description                                                                                                                  |
|----------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text     | string             | yes      | -       | banner text to be displayed                                                                                                   |
| type     | string             | yes      | -       | must be one of: 'success', 'danger', 'info'                                                                                  |
| duration | number&#124;string | yes      | -       | can be 'sticky' or number in seconds before the banner is dismissed                                                           |
| onExit   | func               | yes      | -       | callback function called on dismissal of  the banner. The function will receive all  of the component's props as the argument |
| fullWidth| bool               | no       | -       | if true, it won't set the hardcoded width on the banner container, so the banner will expand to fill the container             |

### Notes
The `<Banner />` component provides only the styling for and enter/exit
behavior for banners. Management of what banners are showing on the screen
must be handled from outside of this component.

All banners are dimissable by clicking on them. However, you can use the
`duration` prop to determine if the banner is sticky or dismissed on a
timer (in units of seconds).

The `onExit` handler will always receive the `<Banner />` component's
props as its argument.
