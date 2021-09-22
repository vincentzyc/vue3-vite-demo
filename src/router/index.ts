import { defineAsyncComponent } from "vue"

export const RouterList = [{
  name: "home",
  component: defineAsyncComponent(() => import("../views/home.vue"))
}, {
  name: "test",
  component: defineAsyncComponent(() => import("../views/test.vue"))
}, {
  name: "haha",
  component: defineAsyncComponent(() => import("../views/haha.vue"))
}, {
  name: "404",
  component: defineAsyncComponent(() => import("../views/404.vue"))
}]

export default RouterList