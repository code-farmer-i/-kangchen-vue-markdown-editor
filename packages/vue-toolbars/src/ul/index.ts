import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { ulCommand } from '@vokit-editor/commands';
import UlToolbarIcon from './icon.vue';

export { UlToolbarIcon };
export const ulToolbar = new VokitToolbar({
  name: 'ul',
  icon: () => h(UlToolbarIcon),
  title: '11',
  action(ctx) {
    ulCommand.handler(ctx);
  },
});
