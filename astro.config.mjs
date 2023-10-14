import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://promethiumjs.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "PromethiumJS",
      social: {
        github: "https://github.com/promethiumjs/promethium",
        twitter: "https://twitter.com/promethiumjs",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", link: "/getting-started/introduction/" },
            { label: "Installation", link: "/getting-started/installation/" },
            {
              label: "Project Environment Setup",
              link: "/getting-started/project-environment-setup/",
            },
          ],
        },
        {
          label: "Tutorial",
          items: [
            { label: "Tic-Tac-Toe", link: "/tutorial/tic-tac-toe/" },
            { label: "Blog", link: "/tutorial/blog/" },
            {
              label: "Random Colour Generator",
              link: "/tutorial/random-colour-generator/",
            },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            {
              label: "PromethiumJS Components",
              link: "/core-concepts/promethiumjs-components/",
            },
            { label: "State", link: "/core-concepts/state/" },
            { label: "Memos", link: "/core-concepts/memos/" },
            { label: "Effects", link: "/core-concepts/effects/" },
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
              label: "Ardenide",
              link: "/guides/ardenide/",
            },
            {
              label: "Tailwind",
              link: "/guides/tailwind/",
            },
            {
              label: "Astro",
              link: "/guides/astro/",
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
