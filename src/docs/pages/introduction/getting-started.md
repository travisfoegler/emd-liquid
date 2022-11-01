---
eleventyNavigation:
  key: Getting started
  parent: Introduction
  order: 2
layout: layout.njk
title: Getting started
permalink: introduction/getting-started/
---

# Getting Started

## Install

Install with your package manager of choice: 

```shell
npm install @emdgroup-liquid/liquid
```

```shell
yarn add @emdgroup-liquid/liquid
```

```shell
pnpm add @emdgroup-liquid/liquid
```

## Import and register Web Components

There are multiple options to choose from when importing and registering Liquid Web Components:

### self-lazy-loading bundle

The [self-lazy-loading bundle](https://stenciljs.com/docs/distribution) is a tree shakable bundle, which includes all Liquid components as well as polyfills. You just import it once, then it automatically loads components lazily whenever they are used in your app.

```js
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

defineCustomElements()
```

### dist-custom-elements

The [dist-custom-elements](https://stenciljs.com/docs/custom-elements) output target is used to generate custom elements in a more optimized way for tree shaking. The generated output consists of ES Modules which helps bundlers to parse and optimize the code.

```js
import { LdButton } from '@emdgroup-liquid/liquid/dist/components/ld-button'

customElements.define('ld-button', LdButton)
```

<ld-notice mode="warning">
  Please be aware that when using <a href="guides/react-bindings/">React bindings</a> you must use the <a href="introduction/getting-started/#self-lazy-loading-bundle">self-lazy-loading bundle</a>.
</ld-notice>

Learn more about the differences in the [Stencil docs](https://stenciljs.com/docs/output-targets).

## Import stylesheets

We recommend importing Liquid stylesheets in a central place respectively the entry file of your application.

There are two options to choose from when importing stylesheets from Liquid. Depending on your needs you should choose one or the other.

1. If you are using [PurgeCSS](https://purgecss.com/) you can import all styles from Liquid and let PurgeCSS remove unused classes from your bundle, no matter if you are using Web Components or CSS Components from liquid:

```js
import '@emdgroup-liquid/liquid/dist/css/liquid.css'
```

2. If you are not using [PurgeCSS](https://purgecss.com/), or anything similar, you should import only what you need in order to keep your bundle small.
   When using Liquid you will always need to import a CSS file containing global styles (shared CSS custom properties, shared utils, font imports...). If you are using CSS Components (as opposed to Web Components), you will also need to import the CSS of the components you are using. An example:

```js
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import '@emdgroup-liquid/liquid/dist/css/ld-button.css'
```

<docs-page-nav prev-href="introduction/why-liquid/" next-title="Guides" next-href="guides/"></docs-page-nav>