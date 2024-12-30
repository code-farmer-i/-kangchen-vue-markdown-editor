import type { VokitCommand } from './command';
import type { HighLightHelper } from './highlight';
import type { VokitParser } from './parser';
import type { VokitToolbar } from './toolbar';

export interface VokitPluginConfig {
  commands?: VokitCommand[];
  toolbars?: VokitToolbar[];
  highlight?: HighLightHelper;
  parser?: VokitParser;
}

export class VokitPlugin {
  config: VokitPluginConfig;

  constructor(config: VokitPluginConfig) {
    this.config = config;
  }
}
