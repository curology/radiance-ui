const addCssJsxAttribute = require('./addCssJsxAttribute.js');
const addRestSpreadJsxAttribute = require('./addRestSpreadJsxAttribute.js');

function transformTemplateForUtilLocation(utilLocation) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  return function transformTemplate(
    { template },
    opts,
    { imports, componentName, props, jsx, exports },
  ) {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    addCssJsxAttribute(jsx);
    addRestSpreadJsxAttribute(jsx);

    return template.ast`
      ${imports}
      import { css } from '@emotion/core';

      import { ICON_PROP_TYPES, ICON_DEFAULT_PROPS, iconStyles } from '${utilLocation}';

      const ${componentName} = (props) => {
        return (
          ${jsx}
        );
      };

      ${componentName}.propTypes = ICON_PROP_TYPES;
      ${componentName}.defaultProps = ICON_DEFAULT_PROPS;

      ${exports}
    `;
  };
}

module.exports = transformTemplateForUtilLocation;
