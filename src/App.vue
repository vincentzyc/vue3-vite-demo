<template>
  <!-- <transition name="van-fade"> -->
  <div>
    <component v-if="curPgae" :is="curPgae" />
  </div>
  <!-- </transition> -->
</template>

<script setup lang="ts">
import { shallowRef, defineAsyncComponent } from "vue"
import { pageList, routerPush } from "./router"
import { getUrlParam } from "./utils"
import Comp404 from "./views/404.vue"

let curPgae = shallowRef("")

function getCurPage(history: History) {
  const page = getUrlParam('page') || 'home'
  const comp = pageList.find(v => v.name === page)
  if (comp) {
    const AsyncComp = defineAsyncComponent(() => import(/* @vite-ignore */comp.component))
    if (AsyncComp) curPgae.value = AsyncComp
  } else {
    curPgae.value = Comp404
  }
}
getCurPage(history)

window.addHistoryListener(() => getCurPage(history))
</script>