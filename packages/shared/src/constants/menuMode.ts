import type { ValueOf } from '../types';

export const MENU_MODE = {
  LIST: 'list',
  PANEL: 'panel',
} as const;

export type MenuMode = ValueOf<typeof MENU_MODE>;
