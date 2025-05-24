import { ref, watchEffect } from "vue";

const theme = ref("light");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  theme.value = savedTheme;
}

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  watchEffect(() => {
    const root = document.documentElement;
    if (theme.value === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme.value);
  });

  return {
    theme,
    toggleTheme,
  };
}
