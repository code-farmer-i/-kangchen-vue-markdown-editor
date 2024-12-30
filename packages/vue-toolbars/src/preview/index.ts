import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import PreviewToolbarIcon from './icon.vue';

export { PreviewToolbarIcon };
export const previewToolbar = new VokitToolbar({
  name: 'preview',
  icon: () => h(PreviewToolbarIcon),
  title: '11',
  action() {},
});
