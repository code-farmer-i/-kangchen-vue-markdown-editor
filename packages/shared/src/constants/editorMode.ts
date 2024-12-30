import type { ValueOf } from '../types';

export const EDITOR_MODE = {
  PREVIEW: 'preview',
  EDITABLE: 'editable',
  EDIT: 'edit',
} as const;

export type EditorMode = ValueOf<typeof EDITOR_MODE>;
