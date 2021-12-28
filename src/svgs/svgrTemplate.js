/**
 * A custom template that preserves the v5 preference of `function` vs. `const`
 *
 * @see https://react-svgr.com/docs/migrate/#template
 */
const template = (variables, { tpl }) => {
  variables.jsx.children.forEach((child) => {
    if (child.openingElement?.name.name === 'title') {
      transformJSXExpressionContainerToJSXText(child);
    }
  });

  return tpl`
${variables.imports};

${variables.interfaces};

function ${variables.componentName}(${variables.props}) {
  return ${variables.jsx};
}
 
${variables.exports};
`;
};

module.exports = template;

/**
 * We transform the default SVGR title prop behavior to output
 * a format consistent with our JSX markup style.
 *
 * Before:
 *
 * children: [
 *   JSXExpressionContainer {
 *     type: "JSXExpressionContainer"
 *     expression: {
 *       type: "Literal"
 *       value: 'Lock Glyph"
 *     }
 *   }
 * ]
 *
 * <title>{'Lock Glyph'}</title>
 *
 * After:
 *
 * children: [
 *   JSXText {
 *     type: "JSXText"
 *     value: 'Lock Glyph"
 *   }
 * ]
 *
 * <title>Lock Glyph</title>
 *
 * @see https://astexplorer.net/#/gist/ac0c742afce8313d0008914be4cdb940/0031f6d07fada4ce2eb8bebfbb5857b2ba788174
 */
function transformJSXExpressionContainerToJSXText(child) {
  // e.g. [{ type: 'JSXExpressionContainer', expression: { type: 'StringLiteral', value: 'Curology Logo' }}]
  const prevChild = child.children[0];

  child.children = [{ type: 'JSXText', value: prevChild.expression.value }];
}
