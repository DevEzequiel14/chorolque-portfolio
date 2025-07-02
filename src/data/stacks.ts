import IconAngular from "../components/icons/stack/IconAngular.astro";
import IconJavascript from "../components/icons/stack/IconJavascript.astro";
import IconTailwind from "../components/icons/stack/IconTailwind.astro";
import IconBootstrap from "../components/icons/stack/IconBootstrap.astro";
import IconTypescript from "../components/icons/stack/IconTypescript.astro";
import IconAstro from "../components/icons/stack/IconAstro.astro";
import IconNpm from "../components/icons/stack/IconNpm.astro";
import IconRxjs from "../components/icons/stack/IconRxjs.astro";
import IconDocker from "../components/icons/stack/IconDocker.astro";
import IconGit from "../components/icons/stack/IconGit.astro";
import IconNotion from "../components/icons/stack/IconNotion.astro";
import IconFirebase from "../components/icons/stack/IconFirebase.astro";
import IconJasmine from "../components/icons/stack/IconJasmine.astro";
import IconAzuredevops from "../components/icons/stack/IconAzuredevops.astro";

export const stacks = {
    "Desarrollo web": [
        { name: "Angular", icon: IconAngular },
        { name: "Astro", icon: IconAstro },
        { name: "TypeScript", icon: IconTypescript },
        { name: "JavaScript", icon: IconJavascript },
        { name: "RxJS", icon: IconRxjs },
    ],
    "Herramientas de desarrollo": [
        { name: "Bootstrap", icon: IconBootstrap },
        { name: "Tailwind", icon: IconTailwind },
        { name: "Jasmine", icon: IconJasmine },
        { name: "NPM", icon: IconNpm },
    ],
    "Tecnologías complementarias": [
        { name: "Docker", icon: IconDocker },
        { name: 'Azure DevOps', icon: IconAzuredevops },
        { name: "Firebase", icon: IconFirebase },
        { name: "Git", icon: IconGit },
        { name: "Notion", icon: IconNotion },
    ],
};
