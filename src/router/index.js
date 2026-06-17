import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonView from "../views/LessonView.vue";
import CategoryView from "../views/CategoryView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/lesson/:id",
    component: LessonView,
  },
  {
    path: "/category/:id",
    component: CategoryView,
  },
  {
    path: "/categories",
    component: CategoriesView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/contact",
    component: ContactView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
