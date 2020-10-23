const addCssJsxAttribute = require('./addCssJsxAttribute.js');
const addRestSpreadJsxAttribute = require('./addRestSpreadJsxAttribute.js');
const deprecatedIcons = require('../icons/deprecatedList.ts');

function transformTemplateForUtilLocation(utilLocation) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  return function transformTemplate(
    { template },
    opts,
    {
      imports, componentName, props, jsx, exports, 
    },
  ) {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    addCssJsxAttribute(jsx);
    addRestSpreadJsxAttribute(jsx);

    // componentName comes through as an AST node with "Svg" prepended
    // normalize the name so we can look it up on our deprecation list
    const normalizedComponentName = componentName.name.replace(/Svg/, '');
    const deprecationMessage = deprecatedIcons[normalizedComponentName];
    const deprecationNotice = deprecationMessage
      ? `console.warn('[Deprecation Warning]: ${deprecationMessage}');`
      : '';

    return template.ast`
      ${imports}
      import { css } from '@emotion/core';

      import { propTypes, defaultProps, iconStyles } from '${utilLocation}';

      const ${componentName} = (props) => {
        ${deprecationNotice}

        return (
          ${jsx}
        );
      };

      ${componentName}.propTypes = propTypes;
      ${componentName}.defaultProps = defaultProps;

      ${exports}
    `;
  };
}

module.exports = transformTemplateForUtilLocation;
