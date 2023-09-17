const defaultTemplate = (variables, { tpl }) => {
  return tpl`
  ${variables.imports};
  
  
  ${variables.interfaces};
  
  const ${variables.componentName} = (${variables.props}): React.ReactElement => (
    ${variables.jsx}
  );
   
  ${variables.exports};
  `;
};

module.exports = defaultTemplate;
