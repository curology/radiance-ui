const addCssJsxAttribute = require('./addCssJsxAttribute.js');
const addRestSpreadJsxAttribute = require('./addRestSpreadJsxAttribute.js');

function transformTemplateForUtilLocation (utilLocation) {
  return function transformTemplate (
    { template },
    opts,
    // eslint-disable-next-line no-unused-vars
    { imports, componentName, props, jsx, exports },
  ) {
    addCssJsxAttribute(jsx);
    addRestSpreadJsxAttribute(jsx);

    return template.ast`
      ${imports}

      import { propTypes, defaultProps, iconStyles } from '${utilLocation}';

      const ${componentName} = ({ className, ...rest }) => (
        ${jsx}
      );

      ${componentName}.propTypes = propTypes;
      ${componentName}.defaultProps = defaultProps;

      ${exports}
    `
  }
};

module.exports = transformTemplateForUtilLocation;
