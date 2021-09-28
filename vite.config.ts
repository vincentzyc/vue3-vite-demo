import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3030,
    // proxy: {
    //   // 字符串简写写法
    //   '/foo': 'http://localhost:4567',
    //   // 选项写法
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   // 正则表达式写法
    //   '^/fallback/.*': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/fallback/, '')
    //   }
    // }
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    target: "es2015",
    // rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    // external: ['vue', 'html2canvas'],
    // output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    // globals: {
    //   vue: 'Vue',
    //   html2canvas: 'html2canvas'
    // },
    // paths: {
    //   vue: 'https://cdn.jsdelivr.net/npm/vue@3.2.6/dist/vue.global.min.js',
    //   html2canvas: 'https://cdn.jsdelivr.net/npm/html2canvas@1.3.2/dist/html2canvas.min.js'
    // }
    // }
    // }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    })
  ]
})