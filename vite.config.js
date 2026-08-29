import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/")
          ) {
            return "react-vendor";
          }

          if (
            id.includes("/node_modules/@mui/") ||
            id.includes("/node_modules/@emotion/")
          ) {
            return "mui-vendor";
          }

          if (
            id.includes("/node_modules/framer-motion/") ||
            id.includes("/node_modules/lucide-react/")
          ) {
            return "animation-vendor";
          }
        },
      },
    },
  },
});