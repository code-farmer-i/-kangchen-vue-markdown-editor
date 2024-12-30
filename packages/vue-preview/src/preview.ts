import type { VokitEditorCore } from '@vokit-editor/core';
import type { ExtractPropTypes, PropType } from 'vue';

export const previewProps = {
  editor: {
    type: Object as PropType<VokitEditorCore>,
  },
  text: {
    type: String,
    default: '',
  },
  tabSize: {
    type: Number,
    default: 2,
  },
  scrollContainer: {
    type: Function,
    default: () => window,
  },
  top: {
    type: Number,
    default: 0,
  },
};
export type PreviewProps = ExtractPropTypes<typeof previewProps>;
export type PreviewEmits = {
  'image-click': [images: string[], imagePreviewInitIndex: number];
};
