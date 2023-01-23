import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { makeServer } from "../src/service";

import "./assets/main.scss";

const app = createApp(App);

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  makeServer();
}
app.use(createPinia());
app.use(router);

app.mount("#app");
