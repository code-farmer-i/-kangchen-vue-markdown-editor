import { VokitEditorCore } from './editorCore';
import { VokitEditorEgine } from './editorEgine';

export type PickPartial<T, K extends keyof T> = {
  [P in K]?: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

export type PickRequired<T, K extends keyof T> = T & Pick<Required<T>, K>;

export type EditorContext = {
  editorCore: VokitEditorCore;
  editorEgine: VokitEditorEgine;
};
