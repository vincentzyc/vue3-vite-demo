<template>
  <div>
    <h1 style="text-align: center;">Home</h1>
    <button @click="gotest">test</button>
  </div>
</template>

<script lang="ts" setup>
import { routerPush } from "../router";

const gotest = ()=>{
  routerPush('test')
}
</script>
