import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Login",
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
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
        {
          name: "Calendar",
          path: "/calendar",
          component: () => import("../views/CalendarView.vue"),
        },
        {
          name: "Create calendar",
          path: "create-calendar",
          component: () => import("../views/CreateCalendarView.vue"),
        },
      ],
    },
  ],
});

export default router;
