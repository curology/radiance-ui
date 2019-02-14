/* this function adds the following jsx attribute
 * as a AST. You can pull the AST structure from
 * astexplorer.net by copying and pasting the code
 * you want and looking at its JSON format
 *
 *
   `
     ${iconStyles(rest)};
     ${className};
   `
 */


function addCssJsxAttribute(jsx) {
  jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "css" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "TaggedTemplateExpression",
        tag: { type: "Identifier", name: "css" },
        quasi: {
          type: "TemplateLiteral",
          expressions: [
            {
              type: "CallExpression",
              callee: {
                type: "Identifier",
                name: "iconStyles",
              },
              arguments: [
                {
                  type: "Identifier",
                  name: "props",
                },
              ],
            },
          ],
          quasis: [
            {
              type: "TemplateElement",
              value: { raw: "" },
            },
            {
              type: "TemplateElement",
              value: { raw: ";" },
            },
          ],
        },
      },
    },
  });
};

module.exports = addCssJsxAttribute;
