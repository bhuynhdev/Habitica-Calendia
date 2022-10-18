import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build"
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:9000/",
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react(), svgrPlugin()]
});
