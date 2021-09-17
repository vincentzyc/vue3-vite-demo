<template>
  <component v-if="curPgae" :is="curPgae" />
</template>

<script setup lang="ts">
import { shallowRef } from "vue"
import { getCurPage } from "./router"

const curPgae = shallowRef()

curPgae.value = getCurPage()

window.addHistoryListener(() => curPgae.value = getCurPage())
window.addEventListener('popstate', () => curPgae.value = getCurPage())

</script>