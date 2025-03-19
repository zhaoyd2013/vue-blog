import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        {
          'vue-router': ['useRouter', 'useRoute']
        },
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true /** 是否是纯类型导入 */
        }
      ],
      dirs: ['./src/views/*.vue', './src/enums/*.ts', './src/utils/*.ts', './src/composables']
    }),
    vue(),
    vueJsx()
  ],
  resolve: {},
  server: {
    port: 8888
  }
})
