<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>hahaha</h1>
  <button @click="gohome">home</button>
  <button @click="go404">404</button>
</template>


<script lang="ts" setup>
import { routerPush } from "../router";

const gohome = () => {
  routerPush('home')
}

const go404 = () => routerPush('404')
</script>