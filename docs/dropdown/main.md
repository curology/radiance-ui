# Dropdown

## Usage

```jsx
class DropdownExample extends React.Component {
  state = { value: null };

  options = [
    { value: 1, label: 'First option' },
    { value: 2, label: 'Second option (disabled)', disabled: true },
    { value: 3, label: 'Third option' },
    { value: 4, label: 'Fourth option' },
  ];

  onChange = ({ value }) => {
    this.setState({ value: parseInt(value, 10) });
  };

  render() {
    return (
      <div>
        Select an option:
        <Dropdown
          value={this.state.value}
          options={this.options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
```

<!-- STORY -->

### Proptypes

| prop                      | propType         | required | default  | description                                           |
| ------------------------- | ---------------- | -------- | -------- | ----------------------------------------------------- |
| value                     | any              | yes      | -        | The currently selected option. Can mount as `null`    |
| options                   | array of objects | yes      | -        | The list of options (see proptypes below)             |
| textAlign                 | string           | no       | 'left'   | Specifies text alignment - must be 'left' or 'center' |
| onChange                  | func             | no       | () => {} | The handler to be invoked on option change            |
| optionsContainerMaxHeight | string           | no       | '250px'  | Specifies maximum height of the expanded dropdown     |

#### `options` Proptypes

| prop     | propType | description                             |
| -------- | -------- | --------------------------------------- |
| value    | any      | The option indentifier                  |
| label    | string   | The text to be displayed for the option |
| disabled | bool     | if true, the option cannot be selected  |

### Notes

`<Dropdown />` is a controlled component and should be wrapped by a parent to control the dropdown's state - See example above. This ships with a mobile implementation that will handle mobile devices automatically.
