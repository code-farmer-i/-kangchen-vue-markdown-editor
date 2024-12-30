import { PropType } from 'vue';
import { EditorView } from '@codemirror/view';

export const codemirrorEditorProps = {
  createCodemirrorView: {
    type: Function as PropType<(el: HTMLElement) => EditorView>,
    default: () => null,
    required: true,
  },
};
