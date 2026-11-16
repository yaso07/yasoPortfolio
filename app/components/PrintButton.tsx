"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { profile } from "@/lib/profile"

export default function PrintButton() {
  return (
    <motion.a
      href={profile.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg print:hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      aria-label="Open resume PDF"
    >
      <FileText className="h-4 w-4" />
      Resume
    </motion.a>
  )
}
