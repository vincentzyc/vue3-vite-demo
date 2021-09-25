import QueryRouter from "./router.vue"
import './history'

function push(name: string, params?: string) {
  history.pushState({ name: name }, '', params ? `?page=${name}&${params}` : `?page=${name}`)
}

function replace(name: string, params?: string) {
  history.replaceState({ name: name }, '', params ? `?page=${name}&${params}` : `?page=${name}`)
}

export const QRouter = {
  push, replace
}

export default QueryRouter