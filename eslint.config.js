import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',

  gitignore: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  formatters: {
    css: true,
    markdown: true,
    html: true,
  },

  vue: true,
  typescript: true,
  yaml: true,
  toml: true,
  jsonc: true,
  slidev: true,
})
