const plugin = (config = {}, ctx) => {

    const prefix = config.prefix || 'md'
    const rules = config.rules || [
        'heading_open',
        'paragraph_open',
        'link_open',
        'bullet_list_open',
        'image',
    ]

    return {

        name: '@silvanite/vuepress-plugin-markdown-classes',

        extendMarkdown: md => {
            rules.map((rule) => {
                md.renderer.rules[rule] = (tokens, idx, options, env, slf) => {
                    if (!tokens[idx].attrs) tokens[idx].attrs = []
                    tokens[idx].attrs.push(['class', `${prefix}-${rule}`])

                    return slf.renderToken(tokens, idx, options)
                }
            })
        },

    }
}

export default plugin
