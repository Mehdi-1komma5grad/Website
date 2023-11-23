import { createApp } from "vue";
import App from "./App.vue";
import * as dotenv from "dotenv";

console.log(import.meta.env);

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import router from "./router";

const app = createApp(App);

app.use(router);
app.use(
  createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "light",
    },
  })
);
app.mount("#app");
