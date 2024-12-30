import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { strikethroughCommand } from '@vokit-editor/commands';
import StrikethroughToolbarIcon from './icon.vue';

export { StrikethroughToolbarIcon };
export const strikethroughToolbar = new VokitToolbar({
  name: 'strikethrough',
  icon: () => h(StrikethroughToolbarIcon),
  title: '11',
  action(ctx) {
    strikethroughCommand.handler(ctx);
  },
});
