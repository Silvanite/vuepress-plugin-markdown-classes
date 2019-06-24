import DefaultRules from './rules'

const plugin = (config = {}, ctx) => {

    const prefix = config.prefix || 'md'
    const rules = config.rules || DefaultRules

    return {

        name: '@silvanite/vuepress-plugin-markdown-classes',

        extendMarkdown: md => {
            rules.map((rule) => {
                md.renderer.rules[rule] = (tokens, idx, options, env, slf) => {
                    tokens[idx].attrJoin('class', `${prefix}-${rule}`)

                    return slf.renderToken(tokens, idx, options)
                }
            })
        },

    }
}

export default plugin
