import type React from "react"
import type { Metadata } from "next"
import { Outfit, Instrument_Serif } from "next/font/google"
import SiteShell from "./components/SiteShell"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Yasodharan Raman — Front-End Developer",
  description:
    "Front-End Developer with nearly 5 years of experience building responsive, scalable web applications with React.js, Next.js and TypeScript. Based in Salem, Tamil Nadu.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${serif.variable}`}>
      <body className="studio-bg min-h-screen font-sans text-foreground antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
