import PropTypes from 'prop-types';

const allowNullPropType = (wrapper: PropTypes.Validator<unknown>) => (
  props: Record<string, unknown>,
  propName: string,
  componentName: string,
  location: string,
  propFullName: string,
) =>
  props[propName] === null
    ? null
    : wrapper(props, propName, componentName, location, propFullName);

export default allowNullPropType;
