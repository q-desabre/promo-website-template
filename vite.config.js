import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@animations": path.resolve(__dirname, "src/animations"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },

  base: mode === "production" ? "/promo-website-template/" : "/",
}));
