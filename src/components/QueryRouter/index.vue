<template>
  <component v-if="curPgae" :is="curPgae" />
</template>

<script setup lang="ts">
// TODO 
// 封装写进vue原型
import { shallowRef } from "vue"
import { getCurPage, ListType } from "./router"

const props = defineProps<{ list: ListType }>()

const curPgae = shallowRef()

curPgae.value = getCurPage(props.list)

window.addHistoryListener(() => curPgae.value = getCurPage(props.list))
window.addEventListener('popstate', () => curPgae.value = getCurPage(props.list))

</script>