import { defineConfig, mergeConfig } from 'vite';
import viteBaseConfig from '../../vite.config.base';
import { join } from 'node:path';
import { pkgs } from '../../scripts/utils';
import vue from '@vitejs/plugin-vue';

const viteConfig = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: pkgs
      .map((pkgName) => ({
        find: `@vokit-editor/${pkgName}`,
        replacement: join(__dirname, `../../packages/${pkgName}/src/index`),
      }))
      .concat({
        find: '@vokit-editor/theme',
        replacement: join(__dirname, '../../packages/theme'),
      }),
  },
});

// https://vitejs.dev/config/
export default mergeConfig(viteBaseConfig, viteConfig);
