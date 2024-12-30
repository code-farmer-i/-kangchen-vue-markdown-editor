import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import FullscreenToolbarIcon from './icon.vue';

export { FullscreenToolbarIcon };
export const fullscreenToolbar = new VokitToolbar({
  name: 'fullscreen',
  icon: () => h(FullscreenToolbarIcon),
  title: '11',
  action() {},
});
