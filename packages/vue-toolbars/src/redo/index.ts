import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { redoCommand } from '@vokit-editor/commands';
import RedoToolbarIcon from './icon.vue';

export { RedoToolbarIcon };
export const redoToolbar = new VokitToolbar({
  name: 'redo',
  icon: () => h(RedoToolbarIcon),
  title: '11',
  action(ctx) {
    redoCommand.handler(ctx);
  },
});
