<template>
  <div>
    <h1 style="text-align: center;">Home</h1>
    <button @click="gotest">test</button>
    <ContactCard />
  </div>
</template>

<script lang="ts" setup>
import ContactCard from "@/components/ContactCard.vue"
import { QRouter } from "@/QueryRouter"

const gotest = () => {
  QRouter.push('test')
}
</script>
