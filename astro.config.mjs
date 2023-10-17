import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://promethiumjs.github.io/docs",
  integrations: [
    starlight({
      title: "PromethiumJS",
      description:
        "JavaScript UI framework for building anything from simple to complex websites using Lit or Lit-html",
      logo: {
        src: "./src/assets/promethiumjs-logo-radioactive-light.png",
      },
      social: {
        github: "https://github.com/promethiumjs/promethium",
        twitter: "https://twitter.com/promethiumjs",
      },
      editLink: {
        baseUrl: "https://github.com/promethiumjs/docs/edit/main/",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", link: "/getting-started/introduction/" },
            { label: "Installation", link: "/getting-started/installation/" },
            {
              label: "Editor Setup",
              link: "/getting-started/editor-setup/",
            },
          ],
        },
        {
          label: "Tutorial",
          items: [
            {
              label: "Color Palette Generator",
              link: "/tutorial/color-palette-generator/",
            },
            {
              label: "Simple Calculator",
              link: "/tutorial/simple-calculator/",
            },
            {
              label: "Notes Management System",
              link: "/tutorial/notes-management-system/",
            },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            {
              label: "Functional Components",
              link: "/core-concepts/functional-components/",
            },
            {
              label: "Core Adaptations",
              link: "/core-concepts/core-adaptations",
            },
            {
              label: "Custom Adaptations",
              link: "/core-concepts/custom-adaptations",
            },
            {
              label: "Advanced State Management",
              link: "/core-concepts/advanced-state-management/",
            },
            {
              label: "Routing",
              link: "/core-concepts/routing/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "UI Component Libraries",
              link: "/guides/ui-component-libraries/",
            },
            {
              label: "Integrating With Other Frameworks And Libraries",
              link: "/guides/integrating-with-other-frameworks-and-libraries",
            },
            {
              label: "Using Tailwind",
              link: "/guides/using-tailwind/",
            },
            {
              label: "Astro Integration",
              link: "/guides/astro-integration/",
            },
            {
              label: "PromethiumJS DevTools",
              link: "/guides/promethiumjs-devtools/",
            },
            {
              label: "Server-Side Rendering",
              link: "/guides/server-side-rendering/",
            },
            {
              label: "Testing",
              link: "/guides/testing/",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "h", link: "/reference/h/" },
            { label: "renderComponent", link: "/reference/renderComponent/" },
            { label: "adaptState", link: "/reference/adapt-state/" },
            { label: "adaptEffect", link: "/reference/adapt-effect/" },
            {
              label: "adaptRenderEffect",
              link: "/reference/adapt-render-effect/",
            },
            { label: "adaptSyncEffect", link: "/reference/adapt-sync-effect/" },
            { label: "ParticleEntity", link: "/reference/particle-entity/" },
            {
              label: "DerivativeEntity",
              link: "/reference/derivative-entity/",
            },
            { label: "ActionEntity", link: "/reference/action-entity/" },
            { label: "Router", link: "/reference/router/" },
            {
              label: "TypeScript Utility Types",
              link: "/reference/typescript-utility-types/",
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
