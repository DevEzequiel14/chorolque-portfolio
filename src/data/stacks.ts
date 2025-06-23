import IconAngular from "../components/icons/stack/IconAngular.astro";
import IconJavascript from "../components/icons/stack/IconJavascript.astro";
import IconHtml from "../components/icons/stack/IconHtml.astro";
import IconTailwind from "../components/icons/stack/IconTailwind.astro";
import IconBootstrap from "../components/icons/stack/IconBootstrap.astro";
import IconTypescript from "../components/icons/stack/IconTypescript.astro";
import IconCss from "../components/icons/stack/IconCss.astro";
import IconAstro from "../components/icons/stack/IconAstro.astro";
import IconNpm from "../components/icons/stack/IconNpm.astro";
import IconRxjs from "../components/icons/stack/IconRxjs.astro";
import IconDocker from "../components/icons/stack/IconDocker.astro";
import IconGit from "../components/icons/stack/IconGit.astro";
import IconNotion from "../components/icons/stack/IconNotion.astro";
import IconFirebase from "../components/icons/stack/IconFirebase.astro";
import IconNetlify from "../components/icons/stack/IconNetlify.astro";

export const stacks = {
    frontend: [
        { name: "Angular", icon: IconAngular },
        { name: "Astro", icon: IconAstro },
        { name: "TypeScript", icon: IconTypescript },
        { name: "JavaScript", icon: IconJavascript },
        { name: "CSS", icon: IconCss },
        { name: "HTML", icon: IconHtml },
    ],
    herramientas: [
        { name: "RxJS", icon: IconRxjs },
        { name: "NgRx", icon: IconBootstrap },
        { name: "Bootstrap", icon: IconBootstrap },
        { name: "Tailwind", icon: IconTailwind },
        { name: "NPM", icon: IconNpm },
    ],
    conocimientos: [
        { name: "Netlify", icon: IconNetlify },
        { name: "Docker", icon: IconDocker },
        { name: "Firebase", icon: IconFirebase },
        { name: "Git", icon: IconGit },
        { name: "Notion", icon: IconNotion },
    ],
};
