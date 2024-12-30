import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { boldCommand } from '@vokit-editor/commands';
import BoldToolbarIcon from './icon.vue';

export { BoldToolbarIcon };
export const boldToolbar = new VokitToolbar({
  name: 'bold',
  icon: () => h(BoldToolbarIcon),
  title: '11',
  action(ctx) {
    boldCommand.handler(ctx);
  },
});
