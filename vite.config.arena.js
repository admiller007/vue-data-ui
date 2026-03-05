import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // Must come before the bare 'vue-data-ui' alias
      {
        find: "vue-data-ui/style.css",
        replacement: fileURLToPath(new URL("./src/vue-data-ui.css", import.meta.url)),
      },
      {
        find: "vue-data-ui",
        replacement: fileURLToPath(new URL("./src/index.js", import.meta.url)),
      },
    ],
  },
  build: {
    outDir: "dist-arena",
  },
});
