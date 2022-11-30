import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Default",
      path: "/",
      component: () => import("../template/DefaultComponent.vue"),
      children: [
        {
          name: "Home",
          path: "/",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
  ],
});

export default router;
