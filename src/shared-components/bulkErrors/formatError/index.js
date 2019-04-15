const formatError = errorValue =>
  Array.isArray(errorValue) ? errorValue.join(', ') : errorValue;

export default formatError;
