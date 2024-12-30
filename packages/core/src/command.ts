import type { EditorContext } from './types';

export class VokitCommand<Args extends Array<any> = any[]> {
  name: string;
  handler: (ctx: EditorContext, ...args: Args) => void;

  constructor(name: string, handler: VokitCommand<Args>['handler']) {
    this.name = name;
    this.handler = handler;
  }
}
