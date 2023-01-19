import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { store } from "./Store/store";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
