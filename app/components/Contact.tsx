"use client"

import { FormEvent, useState } from "react"
import { Github, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/profile"

export default function Contact() {
  const [sentHint, setSentHint] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    const subject = encodeURIComponent(`Portfolio note from ${name || "a visitor"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSentHint(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-24 pt-12">
      <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-card">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h2 className="mt-3 font-serif text-4xl italic leading-tight tracking-tight md:text-5xl">
              Tell me about the product.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              I work remotely from Salem and collaborate with teams shipping React and Next.js products.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="inline-flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-primary">
                  <Github className="h-4 w-4 text-primary" />
                  {profile.githubLabel}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-3 p-7 md:p-10">
            <label className="text-xs uppercase tracking-[0.16em] text-muted-foreground" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
              placeholder="Your name"
            />
            <label className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
              placeholder="you@company.com"
            />
            <label className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none ring-primary/40 focus:ring-2"
              placeholder="What are you building?"
            />
            <button
              type="submit"
              className="mt-3 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Email Yasodharan
            </button>
            {sentHint && (
              <p className="text-xs text-muted-foreground">Your mail app should open with this message ready to send.</p>
            )}
          </form>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  )
}
