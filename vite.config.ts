import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { localDataServer } from "./vite-plugins/local-data-server"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    localDataServer({
      contributionOverviewsPath: "contribution-overviews",
      prAnalysisPath: "pr-analysis",
    }),
  ],
  root: "./frontend",

  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
    },
  },
})
