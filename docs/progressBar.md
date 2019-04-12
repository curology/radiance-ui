# ProgressBar
### Usage

The component has `position: absolute` by default. You must provide a container with `position: relative` to contain the progress bar. To further refine the position, you may use custom styles as shown below.

To start the animation use `loading` status. To control the result pass `success` or `error` to the status property.

```jsx
import { ProgressBar } from 'radiance-ui';
import { PROGRESS_BAR_STATUS } from 'radiance-ui/lib/constants';

// default props:
<ProgressBar status={PROGRESS_BAR_STATUS.loading} />

// with customStyles:
const customHeight = 10;
<ProgressBar
  status={PROGRESS_BAR_STATUS.loading}
  height={customHeight}
  customStyles={css`
    top: calc(50% - ${customHeight / 2}px);
    opacity: 0.5;
  `}
/>

```

<!-- STORY -->

### Proptypes
| prop            | propType         | required | default       | description                                                                                                                  
|-----------------|------------------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------|
| backgroundColor | string           | no      | '#f8f8fa'      | set to the COLORS.background constant |
| barColor        | string           | no      | '#332e54'      | set to the COLORS.primary constant |
| customStyles    | object           | no      | -              | use the tagged template literal css`` from emotion |
| height          | number           | no      | 4              | the bar height |
| loadingTime     | string           | no      | '20s'          | the time that would take to load the bar completely |
| status          | string           | yes     | -              | must be one of: 'loading', 'success', 'error'. You may use the constant PROGRESS_BAR_STATUS to avoid typos |
