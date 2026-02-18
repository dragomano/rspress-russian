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
  base: '/rspress-russian/',
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
    html: {
      tags: [
        {
          tag: 'script',
          children: `(function (c, l, a, r, i, t, y) {
            c[a] =
              c[a] ||
              function () {
                (c[a].q = c[a].q || []).push(arguments);
              };
            t = l.createElement(r);
            t.async = 1;
            t.src = 'https://www.clarity.ms/tag/' + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, 'clarity', 'script', 'vj4rshcfur')`,
        },
      ],
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
