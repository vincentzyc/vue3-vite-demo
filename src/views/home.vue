<template>
  <div>
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
      <SwipeItem>4</SwipeItem>
    </Swipe>
    <h1 style="text-align: center;">Home</h1>
    <button @click="gotest">test</button>
    <ContactCard />
  </div>
</template>

<script lang="ts" setup>
import { Swipe, SwipeItem } from "vant"
import ContactCard from "@/components/ContactCard.vue"
import { QRouter } from "@/QueryRouter"

const gotest = () => {
  QRouter.push('test')
}
</script>
