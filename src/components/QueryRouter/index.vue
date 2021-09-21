<template>
  <component v-if="curPgae" :is="curPgae" />
</template>

<script setup lang="ts">
import { shallowRef } from "vue"
import { getCurPage, ListType } from "./router"

const props = defineProps<{ list: ListType }>()

const curPgae = shallowRef()

curPgae.value = getCurPage(props.list)

window.addHistoryListener(() => curPgae.value = getCurPage(props.list))
window.addEventListener('popstate', () => curPgae.value = getCurPage(props.list))

</script>