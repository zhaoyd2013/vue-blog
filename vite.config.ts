import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        "vue",
        {
          "vue-router": ["useRouter", "useRoute"],
        },
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true /** 是否是纯类型导入 */,
        },
      ],
      dirs: [
        "./src/views/*.vue",
        "./src/enums/*.ts",
        "./src/utils/*.ts",
        "./src/composables",
      ],
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {},
  server: {
    port: 8888,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: function (id) {
          if (id.includes("node_modules")) {
            return "vendor";
          } else if (id.includes("/utils/")) {
            return "utils";
          }
          return null;
        },
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash:10].js",
        assetFileNames: function (assetInfo) {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/css/[name]-[hash].[ext]";
          } else if (
            /.png|.svg|.jpg|.gif|.webp|.jpeg/.test(assetInfo.name as string)
          ) {
            return "assets/img/[name]-[hash].[ext]";
          } else {
            return "assets/[name]-[hash].[ext]";
          }
        },
      },
    },
  },
});
