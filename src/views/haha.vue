<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>hahaha</h1>
  <button @click="gohome">home</button>
  <button @click="go404">404</button>
  <CellGroup inset>
    <Cell title="单元格" value="内容" />
    <Cell title="单元格" value="内容" label="描述信息" />
  </CellGroup>
</template>


<script lang="ts" setup>
import { QRouter } from "@/QueryRouter"
import { Cell, CellGroup } from "vant";

const gohome = () => {
  QRouter.push('home')
}

const go404 = () => QRouter.push('404')
</script>