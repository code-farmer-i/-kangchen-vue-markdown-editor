import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { undoCommand } from '@vokit-editor/commands';
import UndoToolbarIcon from './icon.vue';

export { UndoToolbarIcon };
export const undoToolbar = new VokitToolbar({
  name: 'undo',
  icon: () => h(UndoToolbarIcon),
  title: '11',
  action(ctx) {
    undoCommand.handler(ctx);
  },
});
