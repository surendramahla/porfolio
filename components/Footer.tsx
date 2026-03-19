import { portfolioData } from "@/data/portfolio"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <span className="font-semibold text-foreground">{portfolioData.personal.name}</span>.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
