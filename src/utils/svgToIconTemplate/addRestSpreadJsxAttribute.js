/* this function adds the following jsx attribute
 * as a AST. You can pull the AST structure from
 * astexplorer.net by copying and pasting the code
 * you want and looking at its JSON format
 *
 *
   <svg {...rest} />
 */

function addRestSpreadJsxAttribute(jsx) {
  jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "rest",
    },
  });
};

module.exports = addRestSpreadJsxAttribute;
