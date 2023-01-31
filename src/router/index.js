import { store } from "../Store/index";
import { createRouter, createWebHistory } from "vue-router";

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
        meta: { auth: true, title: "Create a New Team" }
      },
      {
        path: ":id/edit",
        name: "edit_team",
        component: () => import("../views/TeamForm.vue"),
        meta: { auth: true, title: "Edit Team" }
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
        component: () => import("../views/GroupForm.vue"),
        meta: { auth: true }
      },
      {
        path: ":id/edit",
        name: "edit_group",
        component: () => import("../views/GroupForm.vue"),
        meta: { auth: true }
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
        component: () => import("../views/MatchForm.vue"),
        meta: { auth: true }
      },
      {
        path: ":id/edit",
        name: "edit_match",
        component: () => import("../views/MatchForm.vue"),
        meta: { auth: true, title: "Edit Matches" }
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
        component: () => import("../views/ResultsForm.vue"),
        meta: { auth: true }
      },
      {
        path: ":id/edit",
        name: "edit_result",
        component: () => import("../views/ResultsForm.vue"),
        meta: { auth: true }
      }
    ]
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      public: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: {
      public: true
    }
  },

  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgotPassword.vue"),
    meta: {
      public: true
    }
  },

  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/ResetPassword.vue"),
    meta: {
      public: true
    }
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

router.beforeEach(async (to, from, next) => {
  let isAuthenticated = false;

  if (to.meta.public) {
    if (isAuthenticated) {
      return next(false);
    }
    return next(true);
  } else if (to.meta.auth) {
    await store
      .dispatch("auth/user")
      .then(() => {
        return next(true);
      })
      .catch(() => {
        return next(false);
      });
  } else {
    next(true);
  }
});

export default router;
