# Alert
### Usage

```jsx
import { Alert } from 'radiance-ui';
const SampleContentComponent = () => <div>Click <a href='https://google.com'>here</a> to go to Google!</div>;

<Alert.Container>
  <Alert
    content="Your photos were uploaded successfully!"
    type="success"
    duration={4}
    onExit={() => {}}
  />
  <Alert
    content="Your photos were uploaded successfully!"
    type="success"
    duration="sticky"
    onExit={() => {}}
  />
  <Alert
    content="Support has been notified."
    type="info"
    duration="sticky"
    onExit={() => {}}
  />
  <Alert
    content="Oops! We couldn't update your information!"
    type="danger"
    duration="sticky"
    onExit={() => {}}
  />
  <Alert
	content= <SampleContentComponent/>
    type="success"
    duration="sticky"
    onExit={() => {}}
  />  
</Alert.Container>
```

<!-- STORY -->

### Proptypes
| prop     | propType                                | required                    | default | description                                                                                                                  |
|----------|-----------------------------------------|-----------------------------|---------|------------------------------------------------------------------------------------------------------------------------------|
| text     | string         				         | yes if content prop is empty| -       | alert text to be displayed. Will be deprecated in next major version                                                                                                  |
| content  | numbers, strings, elements or an array  | yes if text prop is empty   | -       | renders anything passed to component as text displayed in alert.                                                          |
| type     | string             				     | yes                         | -       | must be one of: 'success', 'danger', 'info'                                                                                  |
| duration | number&#124;string					     | yes                         | -       | can be 'sticky' or number in seconds before the alert is dismissed                                                           |
| onExit   | func            					     | yes                         | -       | callback function called on dismissal of  the alert. The function will receive all  of the component's props as the argument |

### Notes
The `<Alert />` component provides only the styling for and enter/exit
behavior for alerts. Management of what alerts are showing on the screen
must be handled from outside of this component.

All alerts are dimissable by clicking on them. However, you can use the
`duration` prop to determine if the alert is sticky or dismissed on a
timer (in units of seconds).

The `onExit` handler will always receive the `<Alert />` component's
props as its argument.
