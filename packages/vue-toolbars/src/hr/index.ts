import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { hrCommand } from '@vokit-editor/commands';
import HrToolbarIcon from './icon.vue';

export { HrToolbarIcon };
export const hrToolbar = new VokitToolbar({
  name: 'hr',
  icon: () => h(HrToolbarIcon),
  title: '11',
  action(ctx) {
    hrCommand.handler(ctx);
  },
});
