import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Resolve 'vue-data-ui' imports to the local source
      "vue-data-ui": fileURLToPath(new URL("./src/index.js", import.meta.url)),
    },
  },
  build: {
    outDir: "dist-arena",
  },
});
