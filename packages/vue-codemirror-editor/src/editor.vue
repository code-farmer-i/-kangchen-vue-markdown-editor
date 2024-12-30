<template>
  <VokitEditorConfigProvider
    :editor-core="editorCore"
    :editor-egnie="editorEgine"
  >
    <VokitEditorContainer
      height="300px"
      :toolbars="toolbars"
      @toolbar-item-click="handleToolbarItemClick"
      @toolbar-menu-click="handleToolbarMenuClick"
      @editor-wrapper-click="handleEditorWrapperClick"
    >
      <template #editor>
        <VokitEditorCodemirror
          :create-codemirror-view="createCodemirrorView"
          @click.stop
        ></VokitEditorCodemirror>
      </template>
      <template #preview>
        <VokitEditorPreview></VokitEditorPreview>
      </template>
    </VokitEditorContainer>
  </VokitEditorConfigProvider>
</template>

<script setup lang="ts">
import {
  EditorView,
  drawSelection,
  keymap,
  highlightActiveLine,
} from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  indentOnInput,
} from '@codemirror/language';
import {
  history,
  defaultKeymap,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands';
import { languages } from '@codemirror/language-data';
import { VokitEditorCore, VokitEditorEgine } from '@vokit-editor/core';
import {
  VokitEditorContainer,
  VokitEditorConfigProvider,
  VokitToolbar,
} from '@vokit-editor/vue';
import { VokitEditorCodemirror } from '@vokit-editor/vue-codemirror';
import { VokitEditorPreview } from '@vokit-editor/vue-preview';
import { githubLight } from '@uiw/codemirror-theme-github/src';
import {
  boldToolbar,
  clearToolbar,
  codeToolbar,
  fullscreenToolbar,
  headingToolbar,
  hrToolbar,
  imageToolbar,
  italicToolbar,
  linkToolbar,
  olToolbar,
  previewToolbar,
  quoteToolbar,
  redoToolbar,
  saveToolbar,
  strikethroughToolbar,
  syncScrollToolbar,
  tableToolbar,
  tocToolbar,
  ulToolbar,
  undoToolbar,
} from '@vokit-editor/vue-toolbars';

import type { VokitToolbarBaseItem } from '@vokit-editor/vue';
import type { ToolbarProps } from '@vokit-editor/vue';

const basicSetup = [
  history(),
  drawSelection(),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  highlightActiveLine(),
  keymap.of([indentWithTab, ...defaultKeymap, ...historyKeymap]),
];
const createCodemirrorView = (el: HTMLElement) => {
  return new EditorView({
    parent: el,
    extensions: [
      basicSetup,
      EditorView.lineWrapping,
      markdown({
        codeLanguages: languages,
      }),
      githubLight,
    ],
  });
};
const editorCore = new VokitEditorCore({});
const editorEgine = new VokitEditorEgine();
const toolbars = [
  boldToolbar,
  clearToolbar,
  codeToolbar,
  fullscreenToolbar,
  headingToolbar,
  hrToolbar,
  imageToolbar,
  italicToolbar,
  linkToolbar,
  olToolbar,
  previewToolbar,
  quoteToolbar,
  redoToolbar,
  saveToolbar,
  strikethroughToolbar,
  syncScrollToolbar,
  tableToolbar,
  tocToolbar,
  ulToolbar,
  undoToolbar,
].reduce(
  (res, toolbar) => {
    res[toolbar.config.name] = toolbar;

    return res;
  },
  {} as ToolbarProps['toolbars'],
);

const handleEditorWrapperClick = () => {
  editorEgine.call('focusEnd');
};
const handleToolbarItemClick = (toolbar: VokitToolbar) => {
  toolbar.config.action?.({ editorCore, editorEgine });
};
const handleToolbarMenuClick = (item: VokitToolbarBaseItem) => {
  item.action?.({ editorCore, editorEgine });
};
</script>
