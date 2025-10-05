import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/KhaleelReactPortfolio/", // <-- Add this for GitHub Pages
  server: {
    port: 2025,
    hmr: true,
    watch: {
      usePolling: true, // Enables polling for file system watching
    },
  },
});
