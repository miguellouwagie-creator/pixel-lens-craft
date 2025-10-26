import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true, // Permite todos los hosts (necesario para Replit)
  },

  plugins: [
    react(),

    // ✨ NUEVO: Compresión gzip + brotli
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024, // Solo comprimir archivos > 1KB
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

  // ✨ NUEVO: Optimizaciones de build
  build: {
    // Target moderno = menos transformaciones = más rápido
    target: "esnext",

    // Minificación con esbuild (20x más rápido que terser)
    minify: "esbuild",

    // Sin sourcemaps en producción (más rápido)
    sourcemap: false,

    // ✨ Eliminar console.logs automáticamente en producción
    esbuild: {
      drop: ["console", "debugger"],
    },

    // ✨ Code splitting manual optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core
          vendor: ["react", "react-dom"],

          // Router separado
          router: ["react-router-dom"],

          // UI: Radix + Lucide
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

          // Formularios
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],

          // i18n
          i18n: ["react-i18next", "i18next"],

          // Utils
          utils: ["clsx", "tailwind-merge"],
        },

        // Nombres con hash para cache indefinido
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    // Aumentar límite de warnings (opcional)
    chunkSizeWarningLimit: 1000,
  },
});
