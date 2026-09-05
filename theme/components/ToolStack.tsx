import { useLayoutEffect, useRef } from 'react';
import { useLang } from '@rspress/core/runtime';
import { ToolStack as BaseToolStack } from '@rstack-dev/doc-ui/tool-stack';
import styles from './ToolStack.module.scss';

const dict: Record<string, string> = {
  'The fast, unified JavaScript toolchain for developers and agents':
    'Быстрый унифицированный JavaScript-тулчейн для разработчиков и агентов',

  'A fast Rust-based bundler for the web, with a modernized webpack API':
    'Быстрый веб-бандлер на Rust с обновлённым webpack-совместимым API',

  'A fast, extensible build tool for modern web development, powered by Rspack':
    'Быстрый расширяемый инструмент сборки для веб-разработки на основе Rspack',

  'An Rsbuild-based library development tool for creating libraries and UI components':
    'Инструмент на основе Rsbuild для разработки библиотек и UI-компонентов',

  'An Rsbuild-based static site generator for creating documentation sites':
    'Генератор статических сайтов на основе Rsbuild для создания документации',

  'An AI-friendly build analyzer that makes the build process transparent':
    'ИИ-дружелюбный анализатор сборки, делающий процесс сборки прозрачным',

  'A JavaScript testing framework powered by Rspack, with a Jest-compatible API':
    'Фреймворк для тестирования JavaScript на основе Rspack с Jest-совместимым API',

  'A high-performance, ESLint-compatible linter for JavaScript and TypeScript':
    'Высокопроизводительный ESLint-совместимый линтер для JavaScript и TypeScript',
};

function translate(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue?.trim();
    if (text && dict[text]) node.nodeValue = dict[text];
  }
}

export function ToolStack() {
  const lang = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (lang === 'ru' && ref.current) {
      translate(ref.current);
    }
  }, [lang]);

  return (
    <div className={styles.root} ref={ref}>
      <BaseToolStack lang="en" />
    </div>
  );
}