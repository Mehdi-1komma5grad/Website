import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/Home.vue";
import About from "../components/pages/about.vue";
import Login from "../components/pages/Login.vue";
import FamilyTree from "../components/pages/FamilyTree.vue";
import NotFound from "../components/pages/NotFound.vue";
import Register from "@/components/pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/familytree",
    name: "FamilyTree",
    component: FamilyTree,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
