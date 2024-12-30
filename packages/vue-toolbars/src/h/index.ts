import { VokitToolbar } from '@vokit-editor/vue';
import {
  h1Command,
  h2Command,
  h3Command,
  h4Command,
  h5Command,
  h6Command,
} from '@vokit-editor/commands';

export const headingToolbar = new VokitToolbar({
  name: 'h',
  text: 'H',
  title: '11',
  menu: {
    mode: 'list',
    items: [
      {
        name: 'h1',
        text: 'h1',
        action(ctx) {
          h1Command.handler(ctx);
        },
      },
      {
        name: 'h2',
        text: 'h2',
        action(ctx) {
          h2Command.handler(ctx);
        },
      },
      {
        name: 'h3',
        text: 'h3',
        action(ctx) {
          h3Command.handler(ctx);
        },
      },
      {
        name: 'h4',
        text: 'h4',
        action(ctx) {
          h4Command.handler(ctx);
        },
      },
      {
        name: 'h5',
        text: 'h5',
        action(ctx) {
          h5Command.handler(ctx);
        },
      },
      {
        name: 'h6',
        text: 'h6',
        action(ctx) {
          h6Command.handler(ctx);
        },
      },
    ],
  },
});
