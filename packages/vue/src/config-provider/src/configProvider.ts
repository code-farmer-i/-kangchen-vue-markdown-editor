import type { VokitEditorCore, VokitEditorEgine } from '@vokit-editor/core';
import type { PropType, ExtractPropTypes } from 'vue';

export const configProviderProps = {
  editorCore: {
    type: Object as PropType<VokitEditorCore>,
  },
  editorEgnie: {
    type: Object as PropType<VokitEditorEgine>,
  },
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
