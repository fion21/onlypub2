import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/components/Login.vue";
// import SelectGame from "../views/components/SelectGame.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/selectgame",
  //   name: "SelectGame",
  //   component: SelectGame,
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
