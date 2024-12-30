import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { linkCommand } from '@vokit-editor/commands';
import LinkToolbarIcon from './icon.vue';

export { LinkToolbarIcon };
export const linkToolbar = new VokitToolbar({
  name: 'link',
  icon: () => h(LinkToolbarIcon),
  title: '11',
  action(ctx) {
    linkCommand.handler(ctx);
  },
});
