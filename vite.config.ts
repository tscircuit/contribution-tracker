import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./frontend",

  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
    },
  },
})
