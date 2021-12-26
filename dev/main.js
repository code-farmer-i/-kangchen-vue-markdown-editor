import App from './App';
import Vue from 'vue';
// import VueMarkdownEditor from '@/base-editor';
import VueMarkdownEditor from '@/codemirror-editor';

import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
// import Preview from '@/preview';
import Prism from 'prismjs';
// import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import '@/plugins/emoji/emoji';
import createKatexPlugin from '@/plugins/katex/cdn';
import createTodoListPlugin from '@/plugins/todo-list/index';
import '@/plugins/todo-list/todo-list';
import createLineNumberPlugin from '@/plugins/line-number/index';
import createCopyCodePlugin from '@/plugins/copy-code/index';
import '@/plugins/copy-code/copy-code';
import createHighLinesPlugin from '@/plugins/highlight-lines/';
import '@/plugins/highlight-lines/highlight-lines';
import createMermaidPlugin from '@/plugins/mermaid/cdn';
import createAlignPlugin from '@/plugins/align';

import vuepressTheme from '@/theme/vuepress';
import enUS from '@/lang/en-US';

VueMarkdownEditor.Codemirror = Codemirror;
VueMarkdownEditor.lang.use('en-US', enUS);

VueMarkdownEditor.use(createEmojiPlugin())
  .use(createKatexPlugin())
  .use(createTodoListPlugin())
  .use(createLineNumberPlugin())
  .use(createCopyCodePlugin())
  .use(createHighLinesPlugin())
  .use(createMermaidPlugin())
  .use(createAlignPlugin());

// VueMarkdownEditor.use(githubTheme, {
//   codeHighlightExtensionMap: {
//     vue: 'xml',
//   },
// });
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  codeHighlightExtensionMap: {
    vue: 'html',
  },
});
// Preview.use(githubTheme);

Vue.use(VueMarkdownEditor);

// Vue.use(Preview);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
