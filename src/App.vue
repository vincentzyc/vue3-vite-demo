<template>
  <component v-if="curPgae" :is="curPgae" />
</template>

<script setup lang="ts">
import { shallowRef } from "vue"
import { pageList } from "./router"
import { getUrlParam } from "./utils"

let curPgae = shallowRef()

function getCurPage() {
  const page = getUrlParam('page') || 'home'
  const comp = pageList.find(v => v.name === page)
  if (comp) {
    curPgae.value = comp.component ? comp.component : ''
  } else {
    const comp404 = pageList.find(v => v.name === '404')
    if (comp404) {
      curPgae.value = comp404.component ? comp404.component : ''
    } else {
      curPgae.value = ''
    }
  }
}
getCurPage()

window.addHistoryListener(() => getCurPage())
window.addEventListener('popstate', () => getCurPage())

</script>