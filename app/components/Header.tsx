"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        document.documentElement.style.setProperty("--header-height", `${height}px`)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", updateHeaderHeight)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ]

  return (
    <motion.header
      ref={headerRef}
      className="py-6 px-4 md:px-6 flex items-center justify-between bg-background z-[10002] sticky top-0 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Link href="/" className="text-2xl font-bold gradient-text">
        Portfolio
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={pathname === item.path ? "default" : "ghost"}
                asChild
                className={pathname === item.path ? "bg-primary text-primary-foreground" : ""}
              >
                <Link href={item.path}>{item.name}</Link>
              </Button>
            </motion.li>
          ))}
        </ul>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[10003]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              ref={mobileMenuRef}
              className="min-[800px]:hidden fixed top-0 right-0 h-[300px] w-[200px] bg-pink-500 primary-foreground z-[10004] p-6 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-6">
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>
              <nav className="relative right-[20px] bg-gradient-to-br from-pink-500 to-yellow-500 w-[200px]">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant={pathname === item.path ? "default" : "ghost"}
                        asChild
                        className={`w-full justify-start text-white hover:text-white hover:bg-white/20 ${
                          pathname === item.path ? "bg-white/20" : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

