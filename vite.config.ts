import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: true, // atau masukkan IP spesifik seperti '0.0.0.0'
    port: 5173  // opsional, sesuaikan port yang Anda inginkan
  }
});
