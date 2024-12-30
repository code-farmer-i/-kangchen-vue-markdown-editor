import path from 'node:path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { pkgs } from './utils';
import { vueTsc } from './vueTsc';

run();

async function run() {
  for (const pkg of Object.values(pkgs)) {
    await typeCheck(pkg);
  }
}

async function typeCheck(pkg) {
  const pkgDir = path.resolve(`packages/${pkg}`);

  fs.removeSync(path.join(pkgDir, 'dist'));

  console.log(chalk.cyan(`\n[${pkg}] check type...`));

  await vueTsc(pkgDir, true);

  console.log(chalk.cyan(`\n[${pkg}] check type success`));
}
