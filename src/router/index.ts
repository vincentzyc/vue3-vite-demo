import { defineAsyncComponent } from "vue"

export const pageList = [{
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

export function routerPush(name: string) {
  history.pushState({ name: name }, '', '?page=' + name)
}

export function routerReplace(name: string) {
  history.replaceState({ name: name }, '', '?page=' + name)
}