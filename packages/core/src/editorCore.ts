import { VokitCommand } from './command';
import { HighLightHelper } from './highlight';
import { VokitParser } from './parser';
import { vokitException } from '@vokit-editor/shared';

export interface VokitEditorCoreConfig {
  commands?: VokitCommand[];
  parser?: VokitParser;
  highlight?: HighLightHelper;
}

export class VokitEditorCore {
  config: VokitEditorCoreConfig;

  commands: {
    [key: string]: VokitCommand;
  };

  parser?: VokitParser;

  constructor(config?: VokitEditorCoreConfig) {
    this.config = config || {};
    this.commands = {};
    this.parser = config?.parser;

    if (config?.commands?.length) {
      config.commands.forEach((command) => {
        this.addCommand(command);
      });
    }
  }

  use(plugin: unknown) {
    if (plugin instanceof VokitCommand) {
      this.addCommand(plugin);
    }
  }

  addCommand(command: VokitCommand) {
    if (this.commands[command.name]) {
      vokitException.warn(
        `(in addCommand) ${command.name} command already exists`,
      );
    }

    this.commands[command.name] = command;
  }

  parse(text: string) {
    return this.parser?.parse(text);
  }
}
