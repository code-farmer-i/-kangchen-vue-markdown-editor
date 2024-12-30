import path from 'node:path';
import fs from 'fs-extra';
import { execa } from 'execa';

export async function vueTsc(pkgDir, emit) {
  const tsconfigFilePath = path.join(pkgDir, 'tsconfig.json');

  fs.writeFileSync(
    tsconfigFilePath,
    JSON.stringify({
      extends: '../../tsconfig.base.json',
      compilerOptions: {
        outDir: 'dist',
        baseUrl: '.',
      },
      include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
    }),
  );

  try {
    if (emit) {
      await execa('vue-tsc', ['--declaration', '--emitDeclarationOnly'], {
        cwd: pkgDir,
      });
    } else {
      await execa('vue-tsc', ['--noEmit'], {
        cwd: pkgDir,
      });
    }
  } finally {
    fs.removeSync(tsconfigFilePath);
  }
}
