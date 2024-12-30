export interface VokitParserConfig {
  handleParse(mdStr: string): string;
  handleExtend?(handler: (...args: any[]) => any): void;
}

export class VokitParser {
  config: VokitParserConfig;

  constructor(config: VokitParserConfig) {
    this.config = config;
  }

  extend(handler) {
    this.config.handleExtend?.(handler);
  }

  parse(text: string) {
    return this.config.handleParse(text);
  }
}
