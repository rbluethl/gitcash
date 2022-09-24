const pluginSortImports = require('@trivago/prettier-plugin-sort-imports')
const pluginTailwindcss = require('prettier-plugin-tailwindcss')

/** @type {import("prettier").Parser}  */
const parser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse
}

/** @type {import("prettier").Plugin}  */
const plugin = {
  parsers: {
    typescript: parser
  }
}

module.exports = {
  plugins: [plugin],
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  arrowParens: 'always',
  importOrder: [
    '^next/(.*)$',
    '^react/(.*)$',
    '^@lib/(.*)$',
    '^@hooks/(.*)$',
    '^@layouts/(.*)$',
    '^@components/(.*)$',
    '^[./]'
  ],
  importOrderSortSpecifiers: true
}
