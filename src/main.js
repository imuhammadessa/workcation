import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { useTheme } from "./theme/useTheme";

useTheme();

createApp(App).use(router).mount("#app");
