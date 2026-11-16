"use client"

import { motion } from "framer-motion"
import { education, profile } from "@/lib/profile"

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.4rem] border border-white/10 bg-card/80 p-7 md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">About</p>
          <h2 className="mt-3 font-serif text-4xl italic leading-tight tracking-tight md:text-5xl">
            Interfaces that stay fast after launch.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{profile.summary}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{profile.summaryDetail}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Languages · {profile.languages.join(" and ")}
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col justify-between rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,hsl(24_40%_14%),hsl(30_10%_8%))] p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Education</p>
          <div className="mt-8">
            <p className="font-serif text-5xl italic leading-none">{education.score.split(" ")[1]}</p>
            <p className="mt-2 text-sm text-muted-foreground">{education.score}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-medium tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-sm text-foreground/80">{education.field}</p>
            <p className="mt-3 text-sm text-muted-foreground">{education.school}</p>
            <p className="text-sm text-muted-foreground">
              {education.location} · {education.period}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
