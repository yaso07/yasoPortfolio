"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Printer } from "lucide-react"
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
            <Printer size={24} />
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
                  <p className="font-semibold">👋 My Resume!</p>
                  <p className="text-sm text-muted-foreground">Click to get a copy</p>
                </div>
              ) : (
                <p className="font-semibold">My Resume</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Initial tooltip animation */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            className="fixed bottom-28 right-8 z-50 print:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <motion.div
              className="w-32 h-32"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: 3,
                repeatType: "reverse",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M50 90 L50 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: 3 }}
                />
                <motion.path
                  d="M30 30 L50 10 L70 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: 3 }}
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

