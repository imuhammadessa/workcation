// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import Services from "../pages/Services.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "services",
        name: "Services",
        component: Services,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
