"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"
import Header from "./Header"
import PrintButton from "./PrintButton"
import Resume from "./Resume"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,hsl(36_20%_96%/0.035)_1px,transparent_1px),linear-gradient(to_bottom,hsl(36_20%_96%/0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <PrintButton />
      <div id="resume" className="hidden print:block">
        <Resume />
      </div>
    </>
  )
}
