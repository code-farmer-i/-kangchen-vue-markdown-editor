import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { olCommand } from '@vokit-editor/commands';
import OlToolbarIcon from './icon.vue';

export { OlToolbarIcon };
export const olToolbar = new VokitToolbar({
  name: 'ol',
  icon: () => h(OlToolbarIcon),
  title: '11',
  action(ctx) {
    olCommand.handler(ctx);
  },
});
