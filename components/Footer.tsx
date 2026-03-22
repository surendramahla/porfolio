import { portfolioData } from "@/data/portfolio"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="py-6 md:py-8 mt-auto"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(15,23,42,0.60)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-slate-500 md:text-left">
          Built by <span className="font-semibold text-slate-300">{portfolioData.personal.name}</span>.
        </p>
        <div className="flex items-center gap-4 text-slate-500">
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer"
            className="transition-all duration-200 hover:text-[#38BDF8] hover:scale-110">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer"
            className="transition-all duration-200 hover:text-[#38BDF8] hover:scale-110">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
