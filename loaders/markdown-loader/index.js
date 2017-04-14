/* eslint-disable no-console, func-names */
const frontMatter = require('front-matter')
const markdownIt = require('markdown-it')
const hljs = require('highlight.js')
const objectAssign = require('object-assign')
const string = require('string')
const { linkPrefix } = require('toml').parse(String(require('fs').readFileSync('./config.toml')))

const highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

/* eslint-disable no-param-reassign */
function permalink (md) {
  md.renderer.rules.heading_open = (tokens, index) => `<${tokens[index].tag}><a id="${string(tokens[index+1].content).slugify().toString()}"></a>`
  md.renderer.rules.heading_close = (tokens, index) => `<a class="permalink" href="#${string(tokens[index-1].content).slugify().toString()}"><span class="glyphicon glyphicon-link"></span></a></${tokens[index].tag}>`
}
/* eslint-enable no-param-reassign */

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
  replaceLink: (link) => {
    let prefixed = link
    if (!/^(https?:\/\/|\/\/)/.test(link) && process.env.NODE_ENV === 'production') {
      prefixed = link.startsWith('/') ? `${linkPrefix}${link}` : link
    }
    return prefixed
  },
})
  .use(require('markdown-it-replace-link'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-header-sections'))
  .use(require('markdown-it-attrs'))
  .use(permalink)

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
