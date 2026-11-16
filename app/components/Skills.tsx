"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/lib/profile"

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Toolkit</p>
        <h2 className="mt-2 font-serif text-4xl italic tracking-tight md:text-5xl">Skills</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-[1.4rem] border border-white/10 bg-card/80 p-6"
          >
            <h3 className="text-lg font-medium">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
