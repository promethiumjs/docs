---
title: Using Tailwind 
description: Using Tailwind in PromethiumJS apps.
---

Like we said, integrating with PromethiumJS is as easy as integrating with JavaScript, but integrating with [Tailwind](https://tailwindcss.com/) (and some other libraries) is dependent on your build tool or bundler. eg. [Vite](https://vitejs.dev/), [Parcel](https://parceljs.org/), [Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/), etc.

- If you're using Vite tooling with PromethiumJS, follow [this guide](https://tailwindcss.com/docs/guides/vite#react) from your project root directory, omitting the first step and replacing `App.tsx` with any of your project templates that you'd like to style using Tailwind.
Alternatively, you can follow [this guide](https://tailwindcss.com/docs/installation/using-postcss) and skip the step of including your compiled CSS in the `<head>` of your main html file (because Vite automatically handles this for you).
- Follow [this guide](https://tailwindcss.com/docs/guides/parcel) if you're using Parcel.
- Follow [this guide](https://tailwindcss.com/docs/guides/astro) if you're using PromethiumJS with [Astro](https://astro.build/).
- Or else follow [this guide](https://tailwindcss.com/docs/installation).
