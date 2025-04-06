import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Logout from "../views/Logout.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/logout", name: "Logout", component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
