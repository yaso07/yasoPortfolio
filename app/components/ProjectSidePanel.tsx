"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import type { Project } from "@/lib/profile"

export default function ProjectSidePanel({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!project) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            type="button"
            aria-label="Close project"
            className="fixed inset-0 z-[140] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="fixed inset-y-0 right-0 z-[150] flex w-full max-w-xl flex-col border-l border-white/10 bg-background shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{project.period}</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-foreground hover:bg-white/5"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="side-panel-scrollbar flex-1 overflow-y-auto px-6 py-6">
              {project.video ? (
                <div className="mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    src={project.video}
                    title={project.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : project.image ? (
                <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <Image src={project.image} alt="" fill className="object-cover object-top" />
                </div>
              ) : null}

              <p className="text-sm text-primary">{project.role}</p>
              <h2 id="project-title" className="mt-1 font-serif text-4xl italic tracking-tight">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <ul className="mt-6 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  {project.linkLabel ?? "Visit site"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
