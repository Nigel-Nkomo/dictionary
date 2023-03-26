export const getStorageTheme = () => {
  let theme = "light-theme";

  if (localStorage.getItem("theme")) {
    theme = localStorage.setItem("theme", theme);
  }

  return theme;
};
