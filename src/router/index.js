import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/LeftSidebar.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "button",
        name: "Button",
        component: () => import("../pages/Button.vue"),
      },

      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../pages/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
