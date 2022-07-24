import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Client from "../views/pages/Client.vue";
import Home from "../views/pages/Home.vue";
import Notice from "../views/pages/Notice.vue";
import Gallery from "../views/pages/Gallery.vue";
import Products from "../views/pages/Products.vue";
import ProductDetail from "../views/services/ProductDetail.vue";
import Partners from "../views/pages/Partners.vue";
import Contactus from "../views/pages/Contactus.vue";
import Login from "../views/pages/Login.vue";

import Cattle from "../views/pages/Cattle.vue";

import Antibiotic from "../views/subpages/Antibiotic.vue";
import Nutrition from "../views/subpages/Nutrition.vue";
import Essentialoil from "../views/subpages/Essentialoil.vue";

import Admin from "../views/admin/Admin.vue";
import Gallerys from "../views/admin/Gallery.vue";
import Product from "../views/admin/Product.vue";
import Slider from "../views/admin/Slider.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Users from "../views/admin/Users.vue";
import Partner from "../views/admin/Partner.vue";
import NoticeBoard from "../views/admin/NoticeBoard.vue";

const routes = [
  {
    path: "/",
    component: Client,
    redirect: "/home",
    children: [
      { path: "home", name: "Home", component: Home },
      { path: "notice", name: "Notice", component: Notice },
      { path: "gallery", name: "Gallery", component: Gallery },
      { path: "products", name: "Products", component: Products },
      { path: "products/:id", name: "ProductDetail", component: ProductDetail },
      { path: "partners", name: "Partners", component: Partners },
      { path: "contactus", name: "Contactus", component: Contactus },
      { path: "login", name: "Login", component: Login },

      { path: "cattle", component: Cattle },

      { path: "antibiotic", component: Antibiotic },
      { path: "nutrition", component: Nutrition },
      { path: "essentialoil", component: Essentialoil },
    ],
  },

  // meta: { authOnly: true },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/dashboard",
    meta: { authOnly: true },
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "gallery", component: Gallerys },
      { path: "product", component: Product },
      { path: "slider", component: Slider },
      { path: "users", component: Users },
      { path: "partner", component: Partner },
      { path: "notice-board", component: NoticeBoard },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestOnly)) {

    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
