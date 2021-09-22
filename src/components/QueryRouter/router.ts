import './history'

type UrlParamBack = null | string | Record<string, any>

export type ListType = {
  name: string;
  component: any;
}[]

export function routerPush(name: string, params?: string) {
  history.pushState({ name: name }, '', `?page=${name}&${params}`)
}

export function routerReplace(name: string, params?: string) {
  history.replaceState({ name: name }, '', `?page=${name}&${params}`)
}

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

export function getCurPage(pageList: ListType) {
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