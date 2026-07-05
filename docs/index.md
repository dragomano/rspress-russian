---
pageType: home
title: Rspress
titleSuffix: 'Статический генератор сайтов на базе Rsbuild'

hero:
  name: Rspress
  text: Молниеносно быстрый генератор статических сайтов
  tagline: Простой, эффективный и легко расширяемый
  actions:
    - theme: brand
      text: Введение
      link: ./guide/start/introduction
    - theme: alt
      text: Быстрый старт
      link: ./guide/start/getting-started
  image:
    src: /rspress-icon.png
    alt: Логотип Rspress
features:
  - title: Молниеносная скорость сборки
    details: Построено на фронтенд-инструментарии на базе Rust для более быстрой разработки.
    icon: /speed.svg
    link: ./guide/start/introduction
  - title: Поддержка MDX
    details: MDX — мощный способ писать контент, позволяющий использовать React-компоненты прямо внутри Markdown.
    icon: /mdx.svg
    link: ./guide/use-mdx/components
  - title: Встроенный полнотекстовый поиск
    details: Автоматически генерирует индекс полнотекстового поиска во время сборки, при этом поиск доступен «из коробки».
    icon: /search.svg
    link: ./guide/advanced/custom-search
  - title: Нативно для ИИ
    details: Используйте SSG-MD для генерации индексов, совместимых с `llms.txt`, и Markdown-файлов, чтобы большие языковые модели лучше понимали вашу документацию.
    icon: /ai.svg
    link: ./guide/basic/ssg-md
  - title: Генерация статического сайта
    details: Генерирует статические HTML-файлы для продакшен-сборки, чтобы сайт можно было развернуть на любой платформе.
    icon: /static.svg
    link: ./guide/basic/ssg
  - title: Гибкая кастомизация
    details: Расширяйте интерфейс темы и процесс сборки через расширенные API Rspress.
    icon: /custom.svg
    link: ./guide/basic/custom-theme
---
