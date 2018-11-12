const addCssJsxAttribute = require('./addCssJsxAttribute.js');

function transformTemplateForUtilLocation (utilLocation) {
  return function transformTemplate (
    { template },
    opts,
    { imports, componentName, props, jsx, exports },
  ) {
    addCssJsxAttribute(jsx);

    return template.ast`
      ${imports}

      import { propTypes, defaultProps, iconStyles } from '${utilLocation}';

      const ${componentName} = (${props}) => (
        ${jsx}
      );

      ${componentName}.propTypes = propTypes;
      ${componentName}.defaultProps = defaultProps;

      ${exports}
    `
  }
};

module.exports = transformTemplateForUtilLocation;
