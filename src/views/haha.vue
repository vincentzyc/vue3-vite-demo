<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>hahaha</h1>
  <button @click="gohome">home</button>
  <button @click="go404">404</button>
</template>


<script lang="ts" setup>
import { QRouter } from "@/QueryRouter"

const gohome = () => {
  QRouter.push('home')
}

const go404 = () => QRouter.push('404')
</script>