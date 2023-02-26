// Visit https://vitejs.dev/config/ to understand the configs

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      common: path.resolve(__dirname, "./src/common"),
      locales: path.resolve(__dirname, "./src/locales"),
    },
  },
});
