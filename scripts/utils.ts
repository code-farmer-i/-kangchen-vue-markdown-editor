import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';

export const pkgs = [
  'shared',
  'core',
  'commands',
  'vue',
  'vue-toolbars',
  'vue-codemirror',
  'vue-preview',
  'vue-codemirror-editor',
];
export const __dirname = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(__dirname, '..');
export const currentVersion = (await import('../package.json')).version;

export async function runTasks(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    const { task, text } = tasks[i];
    const spinner = ora(text).start();

    try {
      await task();
      spinner.succeed(text);
    } catch (err) {
      spinner.fail(text);
      console.log(err);
      throw err;
    }
  }
}
