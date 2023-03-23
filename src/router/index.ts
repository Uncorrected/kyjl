import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "@/stores";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(from.fullPath, "->", to.fullPath);
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.token && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
