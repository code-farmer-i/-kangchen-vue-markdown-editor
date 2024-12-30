import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { italicCommand } from '@vokit-editor/commands';
import ItalicToolbarIcon from './icon.vue';

export { ItalicToolbarIcon };
export const italicToolbar = new VokitToolbar({
  name: 'italic',
  icon: () => h(ItalicToolbarIcon),
  title: '11',
  action(ctx) {
    italicCommand.handler(ctx);
  },
});
