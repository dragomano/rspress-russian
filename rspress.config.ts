import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerRemoveNotationEscape,
} from '@shikijs/transformers';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress по-русски',
  description: 'Документация Rspress на русском языке',
  lang: 'ru',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  route: {
    cleanUrls: true,
  },
  markdown: {
    shiki: {
      langs: [
        'markdown',
        'mdx',
        'tsx',
        'json',
        'bash',
        'yaml',
        'ts',
        'js',
        'css',
        'html',
      ],
      transformers: [
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerNotationHighlight(),
        transformerNotationFocus(),
        transformerRemoveNotationEscape(),
      ],
    },
  },
  builderConfig: {
    plugins: [pluginSass()],
    resolve: {
      alias: {
        '@components': './components',
        '@fragments': './fragments',
      },
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
