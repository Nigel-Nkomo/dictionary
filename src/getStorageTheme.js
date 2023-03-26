export const getStorageTheme = () => {
  let theme = "light-theme";

  if (localStorage.getItem()) {
    localStorage.setItem(theme);
  }

  return theme;
};
