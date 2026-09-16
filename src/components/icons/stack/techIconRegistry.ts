import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import IconAngular from "./IconAngular.astro";
import IconAstro from "./IconAstro.astro";
import IconAzuredevops from "./IconAzuredevops.astro";
import IconBootstrap from "./IconBootstrap.astro";
import IconDocker from "./IconDocker.astro";
import IconFirebase from "./IconFirebase.astro";
import IconGit from "./IconGit.astro";
import IconJasmine from "./IconJasmine.astro";
import IconJavascript from "./IconJavascript.astro";
import IconMaterial from "./IconMaterial.astro";
import IconNgrx from "./IconNgrx.astro";
import IconNotion from "./IconNotion.astro";
import IconNpm from "./IconNpm.astro";
import IconPlaywright from "./IconPlaywright.astro";
import IconRxjs from "./IconRxjs.astro";
import IconTailwind from "./IconTailwind.astro";
import IconTypescript from "./IconTypescript.astro";

export const techIconRegistry: Record<string, AstroComponentFactory> = {
  angular: IconAngular,
  astro: IconAstro,
  typescript: IconTypescript,
  javascript: IconJavascript,
  rxjs: IconRxjs,
  ngrx: IconNgrx,
  bootstrap: IconBootstrap,
  tailwind: IconTailwind,
  "angular-material": IconMaterial,
  jasmine: IconJasmine,
  npm: IconNpm,
  docker: IconDocker,
  "azure-devops": IconAzuredevops,
  firebase: IconFirebase,
  git: IconGit,
  playwright: IconPlaywright,
  notion: IconNotion,
};
