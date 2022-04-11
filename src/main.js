import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 
const app = createApp(App)
app.use(store).use(router).mount("#app");
// Import the functions you need from the SDKs you need


