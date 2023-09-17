module.exports = {
  template: require('./src/template.js'),
  typescript: true,
  icon: true,
  replaceAttrValues: { '#000': "{props.color || '#000'}" },
  svgProps: {
    width: `{props.width || props.height || 16}`,
    height: `{props.height || props.width || 16}`,
  },
  expandProps: 'start',
};
