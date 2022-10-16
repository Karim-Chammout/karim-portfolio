// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
