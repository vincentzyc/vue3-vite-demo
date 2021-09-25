<template>
  <component v-if="curPgae" :is="curPgae" />
</template>

<script setup lang="ts">
type UrlParamBack = null | string | Record<string, any>
type ListType = {
  name: string;
  component: any;
}[]

import { shallowRef } from "vue"

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
function getUrlParam(name: string = ''): UrlParamBack {
  const href = window.location.href, i = href.indexOf("?");
  if (i < 0) return null;
  const str = href.slice(i);
  if (!str) return null;
  const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g);
  if (!arr) return null;
  const obj: UrlParamBack = {}
  arr.forEach(v => {
    const temp = v.split('=');
    if (temp.length > 0) {
      obj[temp[0]] = temp[1];
    }
  })
  if (name) return obj[name]
  return obj
}

function getCurPage(pageList: ListType) {
  const page = getUrlParam('page') || 'home'
  const comp = pageList.find(v => v.name === page)
  if (comp) {
    return comp.component ? comp.component : ''
  } else {
    const comp404 = pageList.find(v => v.name === '404')
    if (comp404) {
      return comp404.component ? comp404.component : ''
    } else {
      return ''
    }
  }
}
const props = defineProps<{ list: ListType }>()

const curPgae = shallowRef()

curPgae.value = getCurPage(props.list)

window.addHistoryListener(() => curPgae.value = getCurPage(props.list))
window.addEventListener('popstate', () => curPgae.value = getCurPage(props.list))

</script>