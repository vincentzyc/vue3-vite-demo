<template>
  <QueryRouter :list="RouterList" />
</template>

<script setup lang="ts">
import QueryRouter from "./components/QueryRouter/index.vue"
import { RouterList } from "./router"

</script>