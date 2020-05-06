(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{354:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"github-主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-主题"}},[t._v("#")]),t._v(" github 主题")]),t._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("markdown 解析使用 "),n("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),n("OutboundLink")],1),t._v(" 来实现，代码块解析使用 "),n("a",{attrs:{href:"https://github.com/highlightjs/highlight.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("highlight.js"),n("OutboundLink")],1),t._v(" 来实现。")]),t._v(" "),n("p",[t._v("效果如下：")]),t._v(" "),n("ClientOnly",[n("base-editor")],1),t._v(" "),n("h2",{attrs:{id:"扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),n("p",[t._v("主题包默认只支持了 js(javascript), xml(html), css。以免引入太多冗余代码导致包的体积过大。如果需要支持更多的语言代码高亮，请按需引入对应的语言包。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueMarkdownEditor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@kangc/v-md-editor'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按需引入 highlightjs 的语言包，此处以 json 为例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'highlight.js/lib/languages/json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" githubTheme "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@kangc/v-md-editor/lib/theme/github.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVueMarkdownEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("githubTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hljs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// md.set(option).use(plugin);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册语言包")]),t._v("\n    hljs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerLanguage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("a",{attrs:{href:"https://github.com/highlightjs/highlight.js/tree/master/src/languages",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看 highlight.js 支持的语言包"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("扩展后就能支持对应的代码块高亮了，如下")]),t._v(" "),n("ClientOnly",[n("extend-github-theme")],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);