<template>
  <div
    class="vokit-egine-codemirror"
    ref="codemirrorRoot"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useEditor } from '@vokit-editor/vue';
import { smooth } from '@vokit-editor/shared';
import { codemirrorEditorProps } from './codemirror';
import { EditorView } from '@codemirror/view';
import { undo, redo } from '@codemirror/commands';

const { editorEgine } = useEditor();
const props = defineProps(codemirrorEditorProps);
const modelValue = defineModel<string>();
const codemirrorRoot = ref<HTMLElement>();
const text = ref(modelValue.value);

editorEgine?.implements({
  delLineLeft() {
    const { head } = codemirrorView.state.selection.main;
    const cursorLine = codemirrorView.state.doc.lineAt(head);

    codemirrorView.dispatch({
      changes: {
        from: cursorLine.from,
        to: head,
        insert: ''
      }
    });
  },
  getCursorLineLeftText() {
    const { head, empty } = codemirrorView.state.selection.main;

    if (!empty) return;

    const cursorLine = codemirrorView.state.doc.lineAt(head);

    return cursorLine.text.slice(0, head - cursorLine.from);
  },
  undo() {
    undo(codemirrorView);
  },
  redo() {
    redo(codemirrorView);
  },
  clear() {
    codemirrorView.dispatch({
      changes: {
        from: 0,
        to: codemirrorView.state.doc.length,
        insert: ''
      }
    });
  },
  scrollToTop(top) {
    const { top: currentScrollTop } = editorEgine.call('getScrollInfo');

    smooth({
      currentScrollTop,
      scrollToTop: top,
      scrollFn: (scrollTop) => codemirrorView.scrollDOM.scrollTo(0, scrollTop),
    });
  },
  getScrollInfo() {
    const { scrollDOM } = codemirrorView;

    return {
      left: scrollDOM.scrollLeft,
      top: scrollDOM.scrollTop,
      width: scrollDOM.scrollWidth,
      height: scrollDOM.scrollHeight,
      clientWidth: scrollDOM.clientWidth,
      clientHeight: scrollDOM.clientHeight
    };
  },
  replaceSelectionText(text) {
    codemirrorView.dispatch(codemirrorView.state.replaceSelection(text));
  },
  changeSelctionTo(selection) {
    codemirrorView.dispatch({
      selection: {
        head: selection.from,
        anchor: selection.to
      }
    });
  },
  getCurrentSelectedStr() {
    const { from, to } = codemirrorView.state.selection.main;

    return {
      text: codemirrorView.state.sliceDoc(
        from,
        to
      ),
      from,
      to
    };
  },
  focus() {
    codemirrorView.focus();
  },
  focusEnd() {
    codemirrorView.focus();

    const lastPosition = codemirrorView.state.doc.length;
    codemirrorView.dispatch({
      selection: {
        anchor: lastPosition,
        head: lastPosition
      }
    });
  },
  heightAtLine(lineIndex) {
    return codemirrorView.viewportLineBlocks[lineIndex].top;
  }
});

let codemirrorView: EditorView;
onMounted(() => {
  codemirrorView = props.createCodemirrorView(codemirrorRoot.value!);

  codemirrorView.plugin({
    extension: [EditorView.updateListener.of(v => {
      modelValue.value = v.state.doc.toString();
    }), EditorView.domEventHandlers({
      paste(e) {
        editorEgine?.emit('paste', e);
      },
      drop(e) {
        editorEgine?.emit('drop', e);
      },
      blur(e) {
        editorEgine?.emit('blur', e);
      }
    })]
  });
});

watch(modelValue, () => {
  if (modelValue.value !== text.value) {
    text.value = modelValue.value;
    codemirrorView.dispatch({
      changes: {
        from: 0,
        to: codemirrorView.state.doc.length,
        insert: text.value
      }
    });
  }
});
</script>