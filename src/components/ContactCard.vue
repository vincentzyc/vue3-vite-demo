<template>
  <ContactCard type="edit" v-for="item in nameCards" :tel="item.tel" :name="item.name" @click="onEdit" />
  <ContactCard type="add" @click="onAdd" />
</template>

<script setup lang="ts">
import { Toast, ContactCard } from "vant";
import { ref } from "vue";

const nameCards = ref([{
  tel: '13000000000',
  name: '张三'
}])

const onEdit = () => Toast('编辑');
const onAdd = () => {
  const nLength = nameCards.value.length
  nameCards.value.push({
    tel: '1881234567' + nLength,
    name: '张三' + nLength
  })
  Toast('新增成功');
}
</script>