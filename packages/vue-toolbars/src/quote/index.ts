import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { quoteCommand } from '@vokit-editor/commands';
import QuoteToolbarIcon from './icon.vue';

export { QuoteToolbarIcon };
export const quoteToolbar = new VokitToolbar({
  name: 'quote',
  icon: () => h(QuoteToolbarIcon),
  title: '11',
  action(ctx) {
    quoteCommand.handler(ctx);
  },
});
