# Portfolio — Ezequiel Chorolque

Portafolio personal estático de [Ezequiel Chorolque](https://ezequielchorolque.netlify.app): presentación, proyectos, about y detalle de cada trabajo.

Sitio en producción: [ezequielchorolque.netlify.app](https://ezequielchorolque.netlify.app)

## Stack

- **Astro 5** (sitio estático, sin React ni UI frameworks)
- **SCSS** (estilos por capas en `src/styles`)
- **TypeScript** (datos y chequeos con `astro check`)
- **Playwright** (tests E2E de interacciones críticas)
- **@astrojs/sitemap** + `public/robots.txt` (indexación básica)
- Deploy en **Netlify** (build estático → `dist/`)

## Estructura relevante

```text
/
├── public/                 # Assets estáticos (imágenes, scripts, robots.txt)
│   ├── projects/           # Portadas de proyectos (.webp)
│   ├── profile/            # Foto de perfil
│   └── og-image.webp
├── src/
│   ├── pages/
│   │   ├── index.astro     # Home (bento grid)
│   │   ├── about/          # Página About
│   │   └── work/[slug].astro
│   ├── components/
│   │   ├── cards/          # Cards del home
│   │   ├── about/          # Bloques de About
│   │   ├── work/           # Detalle de proyecto
│   │   ├── common/         # Theme toggle, copy email, carousel, etc.
│   │   └── layout/         # Layout (meta, canonical, OG)
│   ├── data/
│   │   ├── projects.ts     # Listado de proyectos (fuente de verdad)
│   │   ├── profileInfo.ts  # Datos personales / about
│   │   └── stacks.ts       # Tecnologías del home
│   └── styles/             # SCSS (base, layout, components, pages)
└── tests/e2e/              # Playwright
```

Las rutas de work se generan desde `projects.ts` (`getStaticPaths` en `work/[slug].astro`).

## Agregar un proyecto

1. Colocá la imagen en `public/projects/` (recomendado: `.webp`).
2. Agregá un objeto en `src/data/projects.ts` con al menos:

```ts
{
  title: "Nombre del proyecto",
  type: "Aplicación web",
  slug: "mi-proyecto", 
  image: "/projects/miProyecto.webp",
  company: "Cliente o nombre",
  rol: "Desarrollador Frontend",
  technologies: ["Astro", "TypeScript"],
  timeline: "2025",
  description: "Resumen corto.",
  context: "Contexto más largo del proyecto.",
  link: "https://demo.example.com/",
  github: "https://github.com/usuario/repo",
}
```

3. Corré `npm run dev` y verificá home (`ProjectsCard`) y `/work/mi-proyecto`.

No hace falta tocar el routing: el slug nuevo se publica solo en el build.

## Scripts

| Comando | Acción |
| :------ | :----- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo (`localhost:4321`) |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Vista previa del build local |
| `npm run quality` | `astro check` + ESLint + Prettier (check) |
| `npm run test:e2e` | Tests E2E con Playwright (headless) |
| `npm run test:e2e:headed` | Igual, con browser visible |

Primera vez con Playwright:

```sh
npx playwright install chromium
```

Los E2E cubren toggle de tema, selector del slider de proyectos y copiar email.

## Deploy (Netlify)

Sitio **estático**: Netlify ejecuta el build y sirve `dist/`.

- Build command: `npm run build`
- Publish directory: `dist`
- URL canónica configurada en `astro.config.mjs` (`site`)

Tras el deploy deberían quedar disponibles `/robots.txt` y `/sitemap-index.xml`.
