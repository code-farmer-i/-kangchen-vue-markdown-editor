import semver from 'semver';
import inquirer from 'inquirer';

export function getNextVersion(version: string) {
  const nextVersions: string[] = [];

  (<const>['patch', 'minor', 'major']).forEach((type) =>
    nextVersions.push(
      semver.inc(version, type)!,
      semver.inc(version, `pre${type}`, 'beta')!,
    ),
  );

  return nextVersions;
}

export function getNextVersionFromBetaVersion(version) {
  return [
    semver.inc(version, 'patch'),
    semver.inc(version, 'prerelease', 'beta'),
  ];
}

export function isBetaVersion(version) {
  const res = semver.prerelease(version);

  return !!res && res[0] === 'beta';
}

export function getReleaseVersion(version) {
  let releaseVersions;

  if (isBetaVersion(version)) {
    releaseVersions = getNextVersionFromBetaVersion(version);
  } else {
    releaseVersions = getNextVersion(version);
  }

  return releaseVersions;
}

export async function selectVersion(curVersion) {
  const customVersionOption = '自定义版本号';
  const releaseVersions = getReleaseVersion(curVersion);

  const question = [
    {
      type: 'list',
      message: `请选择要发布的版本号（当前版本：${curVersion}）:`,
      name: 'version',
      choices: [...releaseVersions, customVersionOption],
    },
    {
      type: 'input',
      message: '请输入要发布的版本号：',
      name: 'customVersion',
      when(answers) {
        return answers.version === customVersionOption;
      },
      validate(releaseVersion) {
        if (!semver.valid(releaseVersion)) {
          return '请按照Semantic Version规范定义版本号';
        }

        if (semver.lt(releaseVersion, curVersion)) {
          return '发布的版本号应该是递增的';
        }

        return true;
      },
    },
    {
      type: 'confirm',
      message({ version, customVersion }) {
        return `确认发布版本 ${customVersion || version} ?`;
      },
      name: 'confirm',
      when(answers) {
        return answers.version || answers.customVersion;
      },
    },
  ];

  const answers = await inquirer.prompt(question);
  const selectedVersion = answers.customVersion || answers.version;

  if (answers.confirm && selectedVersion) {
    return {
      version: selectedVersion,
      isBeta: isBetaVersion(selectedVersion),
    };
  }

  process.exit(1);
}
