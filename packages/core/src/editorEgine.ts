import mitt from 'mitt';
import type { Emitter } from 'mitt';

export interface VokitEditorEgineInterface {
  focusEnd(): void;
  delLineLeft(): void;
  getCursorLineLeftText(): string | undefined;
  scrollToTop(top: number): void;
  getScrollInfo(): {
    left: number;
    top: number;
    width: number;
    height: number;
    clientWidth: number;
    clientHeight: number;
  };
  heightAtLine(lineIndex: number): number;
  focus(): void;
  undo(): void;
  redo(): void;
  clear(): void;
  replaceSelectionText(text: string): void;
  getCurrentSelectedStr(): { text: string; from: number; to: number };
  changeSelctionTo(selection: { from: number; to: number }): void;
}

export type VokitEditorEgineEvents = {
  drop: DragEvent;
  keydown: KeyboardEvent;
  paste: ClipboardEvent;
  blur: FocusEvent;
};

export class VokitEditorEgine {
  interface?: VokitEditorEgineInterface;
  mitter: Emitter<VokitEditorEgineEvents>;

  constructor() {
    this.mitter = mitt<VokitEditorEgineEvents>();
  }

  implements(config: VokitEditorEgineInterface) {
    this.interface = config;
  }

  get on() {
    return this.mitter.on;
  }

  get off() {
    return this.mitter.off;
  }

  get emit() {
    return this.mitter.emit;
  }

  call<
    M extends keyof VokitEditorEgineInterface,
    Fn extends VokitEditorEgineInterface[M],
  >(method: M, ...args: Parameters<Fn>) {
    // @ts-ignore
    return this.interface?.[method](...args) as ReturnType<Fn>;
  }

  insert(
    genInsertContent: (selectedText: string) => {
      text: string;
      selection?: {
        from: number;
        to: number;
      };
    },
  ) {
    this.call('focus');

    const { text: selectedText, from } = this.call('getCurrentSelectedStr');
    const { text: newSelectedText, selection } = genInsertContent(selectedText);

    this.call('replaceSelectionText', newSelectedText);
    this.call('changeSelctionTo', {
      from: from + (selection?.from ?? newSelectedText.length),
      to: from + (selection?.to ?? newSelectedText.length),
    });
  }
}
