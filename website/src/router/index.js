import { createRouter, createWebHistory } from "vue-router";
import AdminViewVue from "../views/AdminView.vue";
import HomeViewVue from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeViewVue,
      meta: { title: "Home" },
    },
    {
      path: "/admin",
      name: "Admin",
      component: AdminViewVue,
      meta: { title: "Admin" },
    },
  ],
});

export default router;
