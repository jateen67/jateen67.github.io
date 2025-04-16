import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/j
export default defineConfig({
  plugins: [react()],
  base: "/",
});
