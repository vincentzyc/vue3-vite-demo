<template>
  <div>
    <h1 style="text-align: center;">Home</h1>
    <button @click="gotest">test</button>
  </div>
</template>

<script lang="ts" setup>
import { QRouter } from "@/QueryRouter"

const gotest = () => {
  QRouter.push('test')
}
</script>
