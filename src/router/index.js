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
    meta: {
      title: "المهندس التقني للمعلوماتية | شروحات تقنية وبرامج كمبيوتر",
      description:
        "موقع المهندس التقني للمعلوماتية يقدم شروحات تقنية وبرامج كمبيوتر وبرامج محاسبية ودروس دعم فني.",
    },
  },
  {
    path: "/lesson/:id",
    component: LessonView,
    meta: {
      title: "شرح البرنامج | المهندس التقني للمعلوماتية",
      description: "شروحات البرامج التقنية وروابط التحميل المباشرة.",
    },
  },
  {
    path: "/category/:id",
    component: CategoryView,
    meta: {
      title: "القسم | المهندس التقني للمعلوماتية",
      description: "استعراض البرامج والشروحات ضمن القسم المختار.",
    },
  },
  {
    path: "/categories",
    component: CategoriesView,
    meta: {
      title: "الأقسام | المهندس التقني للمعلوماتية",
      description:
        "تصفح جميع أقسام الموقع من برامج الكمبيوتر والمحاسبة والدعم الفني.",
    },
  },
  {
    path: "/about",
    component: AboutView,
    meta: {
      title: "من نحن | المهندس التقني للمعلوماتية",
      description:
        "تعرف على موقع المهندس التقني للمعلوماتية والخدمات والشروحات المقدمة.",
    },
  },
  {
    path: "/contact",
    component: ContactView,
    meta: {
      title: "تواصل معنا | المهندس التقني للمعلوماتية",
      description:
        "تواصل معنا للحصول على الدعم الفني أو الاستفسار عن البرامج والخدمات.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
    meta: {
      title: "الصفحة غير موجودة",
      description: "الصفحة المطلوبة غير موجودة.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute("content", to.meta.description);
  }

  next();
});

export default router;
