import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { tableCommand } from '@vokit-editor/commands';
import TableToolbarIcon from './icon.vue';

export { TableToolbarIcon };
export const tableToolbar = new VokitToolbar({
  name: 'table',
  icon: () => h(TableToolbarIcon),
  title: '11',
  action(ctx) {
    tableCommand.handler(ctx);
  },
});
