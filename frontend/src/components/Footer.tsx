import {
  Globe,
  MessageCircle,
  BookOpen,
  Twitter,
  Github,
  Youtube,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-12 pb-8 border-t border-border dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 gap-8">
          {/* MAIN Column */}
          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-4">
              MAIN
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 space-y-3 md:space-y-0">
              <a
                href="https://tscircuit.com"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>TSCircuit Website</span>
              </a>
              <a
                href="https://github.com/tscircuit/contribution-tracker/blob/main/SYNC-DISCORD-ROLES.md"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Sync Discord Roles</span>
              </a>
            </div>
          </div>

          {/* FOLLOW Column */}
          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-4">
              FOLLOW
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 space-y-3 md:space-y-0">
              <a
                href="https://blog.tscircuit.com"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </a>
              <a
                href="https://x.com/tscircuit"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a
                href="https://tscircuit.com/join"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discord</span>
              </a>
              <a
                href="https://github.com/tscircuit/tscircuit"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://youtube.com/@seveibar"
                className="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-span-2 text-center md:text-center mt-8">
            <div className="text-sm text-text-secondary dark:text-text-secondary-dark">
              © {new Date().getFullYear()} TSCircuit. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
