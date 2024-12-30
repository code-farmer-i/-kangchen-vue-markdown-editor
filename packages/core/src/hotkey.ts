export interface VokitHotkeyConfig {
  modifier?: 'ctrl' | 'shift' | 'ctrlAlt' | 'ctrlShift';
  key: string;
}

export class VokitHotkey {
  config: VokitHotkeyConfig;

  constructor(config: VokitHotkeyConfig) {
    this.config = config;
  }
}
