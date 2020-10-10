const addCssJsxAttribute = require('./addCssJsxAttribute.js');
const addRestSpreadJsxAttribute = require('./addRestSpreadJsxAttribute.js');
const deprecatedIcons = require('../icons/deprecatedList.ts');

function transformTemplateForUtilLocation(utilLocation) {
  return function transformTemplate(
    { template },
    opts,
    // eslint-disable-next-line no-unused-vars
    {
      imports, componentName, props, jsx, exports, 
    },
  ) {
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
