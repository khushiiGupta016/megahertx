export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });

  const hash = `#${id}`;
  if (window.location.hash !== hash) {
    window.history.replaceState(null, "", hash);
  }
}
