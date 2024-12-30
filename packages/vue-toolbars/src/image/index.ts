import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import { imageCommand } from '@vokit-editor/commands';
import ImageToolbarIcon from './icon.vue';

export { ImageToolbarIcon };
export const imageToolbar = new VokitToolbar({
  name: 'image',
  icon: () => h(ImageToolbarIcon),
  title: '11',
  action(ctx) {
    imageCommand.handler(ctx);
  },
});
