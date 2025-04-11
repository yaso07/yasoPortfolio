"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <motion.form
        className="max-w-md mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input type="text" placeholder="Your Name" className="bg-secondary/50 border-primary/50 focus:border-primary" />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-secondary/50 border-primary/50 focus:border-primary"
        />
        <Textarea placeholder="Your Message" className="bg-secondary/50 border-primary/50 focus:border-primary" />
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Send Message
        </Button>
      </motion.form>
    </section>
  )
}

