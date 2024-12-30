import { EDITOR_MODE } from '@vokit-editor/shared';
import type { VokitToolbar, VokitToolbarBaseItem } from '../../toolbar';
import type { EditorMode } from '@vokit-editor/shared';
import type { ExtractPropTypes, PropType } from 'vue';

export const containerProps = {
  leftToolbar: {
    type: String,
    default:
      'undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save',
  },
  rightToolbar: {
    type: String,
    default: 'preview toc sync-scroll fullscreen',
  },
  toolbars: {
    type: Object as PropType<Record<string, VokitToolbar>>,
    default: () => ({}),
  },
  fullscreen: Boolean,
  editorScroller: {
    type: Boolean,
    default: true,
  },
  previewScroller: {
    type: Boolean,
    default: true,
  },
  height: String,
  disabledMenus: {
    type: Array as PropType<string[]>,
    default: () => ['image/upload-image'],
  },
  leftAreaVisible: Boolean,
  leftAreaTitle: String,
  leftAreaReverse: Boolean,
  leftAreaWidth: {
    type: String,
    default: '200px',
  },
  mode: {
    type: String as PropType<EditorMode>,
    default: EDITOR_MODE.EDITABLE,
  },
};
export type ContainerProps = ExtractPropTypes<typeof containerProps>;
export type ContainerEmits = {
  resize: [];
  'editor-wrapper-click': [e: MouseEvent];
  'toolbar-item-click': [item: VokitToolbar];
  'toolbar-menu-click': [menu: VokitToolbarBaseItem];
};
