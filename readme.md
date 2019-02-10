# VuePress Plugin to add unique class names to markdown generated html

## Example

```html
<p class="md-paragraph_open">Vuepress</p>
```

## Installation

```sh
npm i @silvanite/vuepress-plugin-markdown-classes
```

Load the plugin inside your `config.js` or in your theme's `index.js`

```js
module.exports = {
    ...
    "plugins": [
        "@silvanite/markdown-classes"
    ]
}
```

## Configuration options

You can overwrite the default configuration if required

```js
module.exports = {
    ...
    "plugins": [
        ["@silvanite/markdown-classes", {
            "prefix": "md",
            "rules": [
                'blockquote_open',
                'bullet_list_open',
                'code_block',
                'hardbreak',
                'heading_open',
                'hr',
                'html_block',
                'html_inline',
                'image',
                'link_open',
                'ordered_list_open',
                'paragraph_open',
                'softbreak',
                'table_open',
            ]
        }]
    ]
}
```

## Support

If you experience any problems with this VuePress Plugin please open a new issue or get in touch on Twitter [@m2de_io](https://twitter.com/m2de_io). Or just look me up anyway, I'd love to hear from you.
