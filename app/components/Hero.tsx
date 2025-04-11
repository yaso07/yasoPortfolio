"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import profile from '../../public/profile.jpeg'

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image
          src={profile}
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4  border-primary"
        />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm Yasodharan
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm a passionate Front End developer creating beautiful and functional websites.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="#projects">View My Work</a>
        </Button>
      </motion.div>
    </section>
  )
}

