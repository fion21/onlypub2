import { createApp } from "vue";
import App from "./App.vue";
import index from "./router";
import "./assets/tailwind.css";
import "./assets/css/styles.css";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(index);
app.mount("#app");
