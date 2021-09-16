export const pageList = [{
  name: "home",
  component: "./views/home.vue"
}, {
  name: "test",
  component: "./views/test.vue"
}, {
  name: "haha",
  component: "./views/haha.vue"
}]

export function routerPush(name: string) {
  history.pushState({ name: name }, '', '?page=' + name)
}

export function routerReplace(name: string) {
  history.replaceState({ name: name }, '', '?page=' + name)
}