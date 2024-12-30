import { currentVersion, __dirname } from './utils';
import { selectVersion } from './version';
import fs from 'fs-extra';
import path from 'node:path';
import chalk from 'chalk';
import { execa } from 'execa';
import { pkgs } from './utils';

const step = (msg) => console.log(chalk.cyan(msg));
const getPkgRoot = (pkg) => path.resolve(__dirname, '../packages/' + pkg);

function updateVersions(version) {
  // 更新根目录版本号
  updatePackage(path.resolve(__dirname, '..'), version);
  // 更新 packages 版本号
  pkgs.forEach((p) => updatePackage(getPkgRoot(p), version));
}

function updatePackage(pkgRoot, version) {
  const pkgPath = path.resolve(pkgRoot, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  pkg.version = version;
  updateDeps(pkg, 'dependencies', version);
  updateDeps(pkg, 'peerDependencies', version);
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}

function updateDeps(pkg, depType, version) {
  const deps = pkg[depType];

  if (!deps) return;

  Object.keys(deps).forEach((dep) => {
    if (deps[dep] === 'workspace:*') {
      return;
    }

    if (
      dep.startsWith('@pagoda-lowcode') &&
      pkgs.includes(dep.replace(/^@pagoda-lowcode\//, ''))
    ) {
      console.log(
        chalk.yellow(`${pkg.name} -> ${depType} -> ${dep}@${version}`),
      );
      deps[dep] = version;
    }
  });
}

async function main() {
  const { version, isBeta } = await selectVersion(currentVersion);

  step('\n更新npm包版本号...');
  updateVersions(version);

  step('\n构建中...');
  await execa('pnpm', ['run', 'build'], {
    stdio: 'inherit',
  });

  step('\n更新pnpm-lock.yaml...');
  await execa('pnpm', ['install', '--prefer-offline'], {
    stdio: 'inherit',
  });

  for (const pkg of pkgs) {
    await publishPackage(pkg, version, isBeta);
  }
}

async function publishPackage(pkgName, version, isBeta) {
  step(`发布 ${pkgName}@${version}...`);

  const params = ['publish', '--git-checks', 'false', '--access', 'public'];

  if (isBeta) {
    params.concat(['--tag', 'beta']);
  }

  const pkgRoot = getPkgRoot(pkgName);
  await execa('pnpm', params, {
    cwd: pkgRoot,
    stdio: 'pipe',
  });

  console.log(chalk.green(`发布成功 ${pkgName}@${version}`));
}

main().catch((err) => {
  updateVersions(currentVersion);

  console.error(err);
});
