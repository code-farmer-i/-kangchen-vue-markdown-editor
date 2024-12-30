import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { clearCommand } from '@vokit-editor/commands';
import ClearToolbarIcon from './icon.vue';

export { ClearToolbarIcon };
export const clearToolbar = new VokitToolbar({
  name: 'clear',
  icon: () => h(ClearToolbarIcon),
  title: '11',
  action(ctx) {
    clearCommand.handler(ctx);
  },
});
