import type { Plugin } from "vite"
import fs from "node:fs"
import path from "node:path"

interface LocalDataServerOptions {
  contributionOverviewsPath?: string
  prAnalysisPath?: string
}

export function localDataServer(options: LocalDataServerOptions = {}): Plugin {
  const {
    contributionOverviewsPath = "contribution-overviews",
    prAnalysisPath = "pr-analysis",
  } = options

  return {
    name: "local-data-server",
    configureServer(server) {
      // Handle contribution overviews directory listing
      server.middlewares.use(
        "/api/repos/tscircuit/contribution-tracker/contents/contribution-overviews",
        (req, res, next) => {
          const dirPath = path.resolve(contributionOverviewsPath)

          if (!fs.existsSync(dirPath)) {
            res.statusCode = 404
            res.end("Directory not found")
            return
          }

          try {
            const files = fs.readdirSync(dirPath)
            const jsonFiles = files
              .filter((file) => file.endsWith(".json"))
              .map((file) => ({
                name: file,
                download_url: `http://localhost:${server.config.server.port || 5173}/local-data/${contributionOverviewsPath}/${file}`,
              }))

            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(jsonFiles))
          } catch (error) {
            res.statusCode = 500
            res.end("Error reading directory")
          }
        },
      )

      // Handle local data file serving
      server.middlewares.use("/local-data", (req, res, next) => {
        const url = new URL(req.url!, `http://localhost`)
        const filePath = path.resolve(url.pathname.slice(1)) // Remove leading slash

        if (!fs.existsSync(filePath)) {
          res.statusCode = 404
          res.end("File not found")
          return
        }

        try {
          const content = fs.readFileSync(filePath, "utf-8")
          res.setHeader("Content-Type", "application/json")
          res.end(content)
        } catch (error) {
          res.statusCode = 500
          res.end("Error reading file")
        }
      })

      // Handle PR analysis files
      server.middlewares.use("/local-pr-analysis", (req, res, next) => {
        const url = new URL(req.url!, `http://localhost`)
        const fileName = url.pathname.slice(1) // Remove leading slash
        const filePath = path.resolve(prAnalysisPath, fileName)

        if (!fs.existsSync(filePath)) {
          res.statusCode = 404
          res.end("File not found")
          return
        }

        try {
          const content = fs.readFileSync(filePath, "utf-8")
          res.setHeader("Content-Type", "application/json")
          res.end(content)
        } catch (error) {
          res.statusCode = 500
          res.end("Error reading file")
        }
      })
    },
  }
}
