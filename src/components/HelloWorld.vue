<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Button color="#7232dd">单色按钮</Button>
  <Button color="#7232dd" plain>单色按钮</Button>
  <Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'vant';

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>