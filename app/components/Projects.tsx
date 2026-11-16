"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/profile"
import ProjectSidePanel from "./ProjectSidePanel"

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Selected work</p>
          <h2 className="mt-2 font-serif text-4xl italic tracking-tight md:text-5xl">Projects</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          International client work across content platforms, service operations and marketing analytics. Open a card
          for the full scope.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className={`group overflow-hidden rounded-[1.4rem] border border-white/10 bg-card text-left transition-colors hover:border-primary/40 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className={project.featured && project.image ? "md:grid md:grid-cols-[1.1fr_0.9fr]" : ""}>
              {project.image && (
              <div className="relative min-h-[220px] overflow-hidden bg-[linear-gradient(145deg,hsl(24_40%_16%),hsl(30_10%_8%))]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes={project.featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              )}
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.period}</p>
                    <h3 className="mt-1 text-xl font-medium tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-primary">{project.role}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectSidePanel project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
