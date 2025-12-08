import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Penting: impor module 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan bagian resolve ini:
  resolve: {
    alias: {
      // Alias '@' akan menunjuk ke folder '/src'
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
