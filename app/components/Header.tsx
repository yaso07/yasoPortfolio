"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { profile } from "@/lib/profile"

const menuItems = [
  { name: "Work", path: "/#work" },
  { name: "Experience", path: "/#experience" },
  { name: "Skills", path: "/#skills" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
]

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty("--header-height", `${headerRef.current.offsetHeight}px`)
      }
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)
    return () => window.removeEventListener("resize", updateHeaderHeight)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-white/5 bg-background/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            YR
          </span>
          <span className="text-[15px] font-medium tracking-tight text-foreground">
            {profile.firstName}
            <span className="text-muted-foreground"> Raman</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[120] bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <span className="text-sm text-muted-foreground">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1 px-4 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={pathname === "/" ? item.path.replace("/", "") : item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 text-2xl font-medium tracking-tight"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                View resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
