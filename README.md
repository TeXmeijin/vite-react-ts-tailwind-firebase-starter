# vite-react-ts-tailwind-starter

Starter using Vite + React + TypeScript + Tailwind.

## Motivation

Improve building your faster prototyping by using Vite, TypeScript, React, TailwindCSS.

## Vite

[Vite](https://github.com/vitejs/vite) is a fast frontend build tool. According to the [README](https://github.com/vitejs/vite/blob/main/README.md), it consists of two major parts:

- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## React

[React](https://github.com/facebook/react) is a JavaScript library for building user interfaces.

Due to its awesome renderer system, there are many [React Renderor](https://github.com/chentsulin/awesome-react-renderer). So React can be not used only Web, for example, used by [React Native](https://reactnative.dev/).

Let's dive into React and Vite can use with React.

## TypeScript

[TypeScript](https://github.com/microsoft/TypeScript) is a superset of JavaScript. It is just one of NPM library, but it provides an original compiler.

When you use TypeScript with React, you can write JSX with TypeScript, called TSX. Then you can develop views written by  **Type-Safe** template.

## Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is modern utility-first CSS framework. It provides many CSS rules, but these are purged when production builds. So developers do not worry about CSS asset size for performance optimization.

In VSCode, I recommend to use [intellisense extension](https://tailwindcss.com/docs/intellisense).

Frequently, React developers are worried about how to write CSS in TSX(JSX) template. You must choose from CSS Modules, [styled-components](https://styled-components.com/), [linaria](https://github.com/callstack/linaria), and so on.
Additionally, CSS architecture is difficult about scoping, e.g. BEM, FLOCSS.

When you decide to use Tailwind, you only write utility-first CSS classes, you don't have to worry about them!

## Formatter and Linter

Already set up [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). You can customize the rules.

NOTICE: The template does not use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [prettier-eslint](https://github.com/prettier/prettier-eslint). So I recommend that running commands individually. e.g. `prettier && eslint`.

Please read: https://prettier.io/docs/en/integrating-with-linters.html.

# ToDo

- [x] install and set up [TailwindCSS/JIT](https://github.com/tailwindlabs/tailwindcss-jit) see this [PR](https://github.com/TeXmeijin/vite-react-ts-tailwind-starter/pull/1)
