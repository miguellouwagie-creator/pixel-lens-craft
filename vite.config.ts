import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // <--- ESTO ES LO QUE ARREGLA EL ERROR DE CONEXIÓN
    port: 8080,
    allowedHosts: true,
  },

  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    esbuild: {
      drop: ["console", "debugger"],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: [
            "lucide-react",
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-label",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
          i18n: ["react-i18next", "i18next"],
          utils: ["clsx", "tailwind-merge"],
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
