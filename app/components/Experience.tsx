"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/profile"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Career</p>
        <h2 className="mt-2 font-serif text-4xl italic tracking-tight md:text-5xl">Experience</h2>
      </div>

      <ol className="relative space-y-4 border-l border-white/10 pl-6 md:pl-8">
        {experience.map((job, index) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[1.7rem] top-7 h-2.5 w-2.5 rounded-full bg-primary md:-left-[2.15rem]" />
            <article className="rounded-[1.4rem] border border-white/10 bg-card/80 p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-primary">
                    {job.company}
                    <span className="text-muted-foreground"> · {job.location}</span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
