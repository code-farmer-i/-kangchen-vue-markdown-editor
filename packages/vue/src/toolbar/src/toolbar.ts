import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { MenuMode } from '@vokit-editor/shared';
import type { EditorContext } from '@vokit-editor/core';

export const toolbarProps = {
  groups: {
    type: Array as PropType<string[][]>,
    default: () => [],
  },
  toolbars: {
    type: Object as PropType<Record<string, VokitToolbar>>,
    default: () => ({}),
  },
  disabledMenus: Array as PropType<string[]>,
};
export type ToolbarProps = ExtractPropTypes<typeof toolbarProps>;

type WithRender<T> = T | (() => VNode);
export interface VokitToolbarBaseItem {
  name: string;
  title?: WithRender<string>;
  text?: WithRender<string>;
  class?: WithRender<string>;
  icon?: () => VNode;
  action?: (ctx: EditorContext) => any;
}

export interface VokitToolbarConfig extends VokitToolbarBaseItem {
  menu?: {
    mode: MenuMode;
    itemWidth?: string;
    rowNum?: number;
    items: VokitToolbarBaseItem[];
  };
}

export class VokitToolbar {
  config: VokitToolbarConfig;

  constructor(config: VokitToolbarConfig) {
    this.config = config;
  }
}
