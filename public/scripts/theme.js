export function applyTheme() {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const themeToApply = theme || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", themeToApply);
}