export const deprecatedProperties = {
  loading: "The 'loading' prop is deprecated. Use 'isLoading' instead.",
};

export const isLoadingPropFunction = (
  props: Record<string, unknown>,
  propName: string,
  componentName: string,
): Error | null => {
  if (props[propName] !== undefined) {
    return new Error(
      `'loading' prop will be deprecated in a future major release. Please rename 'loading' to 'isLoading' in ${componentName}`,
    );
  }

  return null;
};
