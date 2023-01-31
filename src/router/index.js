import { store } from "../Store/index";
import { createRouter, createWebHistory } from "vue-router";

const authCheck = async () => {
  return store
    .dispatch("auth/user")
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

/**
 * @type {Array<import('vue-router').RouteRecord>}
 */
const routes = [
  {
    path: "/",
    name: "home",
    redirect() {
      return { name: "teams" };
    }
  },

  {
    path: "/teams",
    children: [
      {
        path: "",
        name: "teams",
        component: () => import("../views/Teams.vue")
      },
      {
        path: "new",
        name: "new_team",
        component: () => import("../views/TeamForm.vue"),
        beforeEnter: authCheck
      },
      {
        path: ":id/edit",
        name: "edit_team",
        component: () => import("../views/TeamForm.vue"),
        beforeEnter: authCheck
      }
    ]
  },

  {
    path: "/groups",
    children: [
      {
        path: "",
        name: "groups",
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
    children: [
      {
        path: "",
        name: "matches",
        component: () => import("../views/Matches.vue")
      },
      {
        path: "new",
        name: "new_match",
        component: () => import("../views/MatchForm.vue")
      },
      {
        path: ":id/edit",
        name: "edit_match",
        component: () => import("../views/MatchForm.vue")
      }
    ]
  },

  {
    path: "/results",
    children: [
      {
        path: "",
        name: "results",
        component: () => import("../views/Results.vue")
      },
      {
        path: "new",
        name: "new_result",
        component: () => import("../views/ResultsForm.vue")
      },
      {
        path: ":id/edit",
        name: "edit_result",
        component: () => import("../views/ResultsForm.vue")
      }
    ]
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },

  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgotPassword.vue")
  },

  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/ResetPassword.vue")
  },

  {
    path: "/standings",
    name: "standings",
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

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/' && to.path !== '/register' && !isAuthenticated()) {
//       return next({path: '/'})
//   }
//   return next()
// })

// function isAuthenticated() {
//   return Boolean(localStorage.getItem('APP_DEMO_USER_TOKEN'))
// }

export default router;
