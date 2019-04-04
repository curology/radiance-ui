import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../typography';
import HelperText, { ErrorItem, HintItem } from './helperText';
import { FormContainer, InputContainer } from './style';
import ErrorIcon from '../../svgs/icons/error-icon.svg';

const FormSection = ({
  children,
  displayValidation,
  errorMessage,
  isFocused,
  hint,
  isValid,
  label,
  labelFor,
}) => {
  const htmlFor = labelFor || label;
  const shouldRenderError = !!(errorMessage && !isValid && displayValidation);
  const shouldRenderHint = !!(hint && isFocused);
  return (
    <FormContainer>
      {!!label && (
        <Typography.Label htmlFor={htmlFor}>{label}</Typography.Label>
      )}

      <InputContainer shouldRenderError={shouldRenderError}>
        {children}
        <ErrorIcon />
      </InputContainer>

      <HelperText>
        {shouldRenderError && <ErrorItem key="error">{errorMessage}</ErrorItem>}
        {shouldRenderHint && <HintItem key="hint">{hint}</HintItem>}
      </HelperText>
    </FormContainer>
  );
};

FormSection.defaultProps = {
  isValid: true,
  displayValidation: true,
};

FormSection.propTypes = {
  children: PropTypes.node,
  displayValidation: PropTypes.bool,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  isFocused: PropTypes.bool,
  hint: PropTypes.string,
};

export { baseInputStyles, inputStyles, Textarea } from './style';
export default FormSection;
