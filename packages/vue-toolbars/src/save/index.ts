import { h } from 'vue';
import { VokitToolbar } from '@vokit-editor/vue';
import SaveToolbarIcon from './icon.vue';

export { SaveToolbarIcon };
export const saveToolbar = new VokitToolbar({
  name: 'save',
  icon: () => h(SaveToolbarIcon),
  title: '11',
  action() {},
});
