"use client"

import { Inter } from "next/font/google"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"
import Header from "./components/Header"
import Resume from "./components/Resume"
import PrintButton from "./components/PrintButton"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <head>
        {/* <style>{`
          @media print {
            body > * {
              display: none !important;
            }
            body > #resume {
              display: block !important;
            }
            @page {
              margin: 0;
              size: A4;
            }
          }
        `}</style> */}
      </head>
      <body className={`${inter.className} animated-bg min-h-screen`}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <PrintButton />
        <div id="resume" className="hidden print:block">
          <Resume />
        </div>
      </body>
    </html>
  )
}

