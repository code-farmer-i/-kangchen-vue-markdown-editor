import { inject, provide } from 'vue';
import { VokitEditorEgine, VokitEditorCore } from '@vokit-editor/core';
import type { InjectionKey } from 'vue';

const EDITOR_EGINE_INJECTION_KEY: InjectionKey<VokitEditorEgine> = Symbol();
const EDITOR_CORE_INJECTION_KEY: InjectionKey<VokitEditorCore> = Symbol();

export const useEditor = () => {
  const editorEgine = inject(EDITOR_EGINE_INJECTION_KEY);
  const editorCore = inject(EDITOR_CORE_INJECTION_KEY);

  return {
    editorEgine,
    editorCore,
  };
};

export const provideEditor = (config: {
  editorEgine: VokitEditorEgine;
  editorCore: VokitEditorCore;
}) => {
  provide(EDITOR_EGINE_INJECTION_KEY, config.editorEgine);
  provide(EDITOR_CORE_INJECTION_KEY, config.editorCore);
};
