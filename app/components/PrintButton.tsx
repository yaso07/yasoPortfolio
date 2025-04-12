"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FileText, Printer } from "lucide-react"
import { useState } from "react"

export default function PrintButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTip, setShowTip] = useState(true)

  const handlePrint = () => {
    window.open("https://drive.google.com/file/d/19F8rzyln8xJB53Y3Mc2A0q39dn5Pmlji/view?usp=sharing")
  }

  return (
    <>
      
      <motion.div
        className="fixed bottom-8 right-8 z-50 print:hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          className="relative bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {
            setIsHovered(true)
            setShowTip(false)
          }}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handlePrint}
        >
          <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.3 }}>
            <FileText size={24} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {(isHovered || showTip) && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {showTip ? (
                <div className="flex flex-col items-center">
                  <p className="font-semibold">👋 View My Resume!</p>
                  <p className="text-sm text-muted-foreground">Click to get a copy</p>
                </div>
              ) : (
                <p className="font-semibold">My Resume</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

