function setTheme(isDark) {
  document.firstElementChild.setAttribute("theme", isDark ? "dark" : "light");
}

/* sync theme with system for the first time */
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(isDark);

/* keep website and system theme in sync */

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    setTheme(isDark);
  });
