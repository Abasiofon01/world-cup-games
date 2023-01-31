import "./style.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { store } from "./Store/store";

store.dispatch("auth/user").then(() => {
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount("#app");
});

// const app = createApp(App);
// app.use(store);
// app.use(router);
// app.mount("#app");
