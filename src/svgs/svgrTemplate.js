/**
 * A custom template that preserves the v5 preference of `function` vs. `const`
 *
 * @see https://react-svgr.com/docs/migrate/#template
 */
const template = (variables, { tpl }) => {
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
