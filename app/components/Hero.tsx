"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { profile, stats } from "@/lib/profile"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:pt-20">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.75fr)]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.role} · Remote
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {profile.firstName}
            <span className="mt-1 block font-serif text-[0.92em] italic text-primary">Raman</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {profile.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Selected work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-card shadow-[0_30px_80px_-40px_hsl(24_90%_40%/0.8)]">
            <Image
              src="/profile.jpeg"
              alt="Yasodharan Raman"
              width={640}
              height={760}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/85 p-4 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Based in</p>
            <p className="mt-1 text-sm font-medium">{profile.location}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{profile.focus}</p>
          </div>
        </motion.div>
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background/80 px-4 py-5 md:px-6">
            <dt className="font-serif text-3xl italic text-foreground md:text-4xl">{stat.value}</dt>
            <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
