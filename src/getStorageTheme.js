export default function getStorageTheme() {
  let theme = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
}
