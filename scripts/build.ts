import path from 'node:path';
import { createRequire } from 'node:module';
import { build as viteBuild } from 'vite';
import { defineConfig, mergeConfig } from 'vite';
import chalk from 'chalk';
import viteBaseConfig from '../vite.config.base';
import { pkgs } from './utils';
import { vueTsc } from './vueTsc';

const require = createRequire(import.meta.url);

run();

async function run() {
  for (const pkg of Object.values(pkgs)) {
    await build(pkg);
  }
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`);
  const pkg = require(`${pkgDir}/package.json`);

  // if this is a full build (no specific targets), ignore private packages
  if (!pkgs.length && pkg.private) {
    return;
  }

  const deps = [
    'vue',
    ...Object.keys({
      ...pkg.peerDependencies,
      ...pkg.dependencies,
    }),
  ];
  const viteBuildConfig = defineConfig({
    root: pkgDir,

    build: {
      lib: {
        entry: `${pkgDir}/src/index.ts`,
        formats: ['cjs', 'es'],
        fileName: (format: string) => {
          return `index.${format}.js`;
        },
      },

      rollupOptions: {
        external: (path) => {
          return deps.some((dep) => path.startsWith(dep));
        },
      },
    },
  });

  await viteBuild(mergeConfig(viteBaseConfig, viteBuildConfig));

  console.log(chalk.cyan('\nbuilding type declarations...'));

  await vueTsc(pkgDir, true);

  console.log(chalk.green('build type declarations successfully'));
}
