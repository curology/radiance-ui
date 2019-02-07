# Banner
### Usage

```jsx
import { Banner } from 'radiance-ui';
      <Banner
        text="This banner will go away automatically"
        type="danger"
        allowDismiss
        onClick={() => { console.log('clicking dissapearing banner') }}
      />
      <Banner
        text="This is a not dismissable banner"
        type="danger"
        onClick={() => { console.log('clicking non dismissable banner') }}
      />
      <Banner
        text={text('text', 'This is an dismissable banner')}
        type={select('type', ['success', 'info', 'danger'], 'info')}
        duration='sticky'
        onClick={() => { console.log('dismissable banner exited')}}
        allowDismiss
      />
```

<!-- STORY -->

### Proptypes
| prop        | propType           | required | default | description                                                                                                                  |
|-------------|--------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text        | string             | yes      | -       | banner text to be displayed                                                                                                  |
| type        | string             | yes      | -       | must be one of: 'success', 'danger', 'info'                                                                                  |
| duration    | number&#124;string | yes      | -       | can be 'sticky' or number in seconds before the banner is dismissed                                                          |
| onClick     | func               | yes      | -       | callback function called on clicking the banner. The function will receive all  of the component's props as the argument     |
| fullWidth   | bool               | no       | true    | if false, it will use the hardcoded width instead of expanding to fill the container                                         |
| allowDismiss| bool               | no       | false   | if true, it will allow you to dismiss the banner                                                                             |

### Notes
The `<Banner />` component provides only the styling for and enter/exit
behavior for banners. Management of what banners are showing on the screen
must be handled from outside of this component.

All banners are by default not dismissable. If dismissable, you can use the
`duration` prop to determine if the banner is sticky or dismissed on a
timer (in units of seconds).

The `onExit` handler will always receive the `<Banner />` component's
props as its argument.
