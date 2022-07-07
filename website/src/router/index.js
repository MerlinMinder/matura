import { createRouter, createWebHistory } from "vue-router";
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
  ],
});

export default router;
