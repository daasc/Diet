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
          meta: { requiresAuth: true },
        },
        {
          name: "Calendar",
          path: "/calendar",
          component: () => import("../views/CalendarView.vue"),
          meta: { requiresAuth: true },
        },
        {
          name: "Create calendar",
          path: "create-calendar",
          component: () => import("../views/CreateCalendarView.vue"),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta?.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
  next();
});

export default router;
