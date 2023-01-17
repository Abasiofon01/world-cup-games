import Teams from "../views/Teams.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect() {
      return { name: "Teams" };
    }
  },

  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },

  {
    path: "/groups",
    children: [
      {
        path: "",
        name: "Groups",
        component: () => import("../views/Groups.vue")
      },
      {
        path: "new",
        name: "new_group",
        component: () => import("../views/GroupForm.vue")
      },
      {
        path: ":id/edit",
        name: "edit_group",
        component: () => import("../views/GroupForm.vue")
      }
    ]
  },

  {
    path: "/matches",
    name: "Matches",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Matches.vue")
  },

  {
    path: "/standings",
    name: "Standings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Standings.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
