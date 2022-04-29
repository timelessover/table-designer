import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {},
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: "@", replacement: resolve(__dirname, "./src") },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "root-entry-name": "default",
        },
        javascriptEnabled: true,
      },
    },
  },
});
