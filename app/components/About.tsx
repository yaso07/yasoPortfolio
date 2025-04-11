"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasTriggered(true)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-6 overflow-hidden" ref={ref}>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView && hasTriggered ? "visible" : "hidden"}
      >
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <motion.p className="text-lg mb-4" variants={itemVariants}>
            Hello! I'm Yasodharan, a passionate Front End developer with a keen eye for design and a love for creating
            intuitive, user-friendly websites. With 3.5 years of experience in the field, I've had the opportunity to
            work on a wide range of projects, from small business websites to large-scale web applications.
          </motion.p>
          <motion.p className="text-lg mb-4" variants={itemVariants}>
            My expertise lies in front-end development, with a strong focus on React and Next.js. I'm also well-versed
            in back-end technologies and enjoy creating full-stack applications that are both powerful and elegant.
          </motion.p>
          <motion.p className="text-lg mb-6" variants={itemVariants}>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying a good book on software architecture and design patterns.
          </motion.p>
          {/* <motion.div variants={itemVariants}>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div> */}
        </motion.div>
        <motion.div className="w-full md:w-1/2 flex justify-center" variants={itemVariants}>
          <Image
            src="https://www.pixelstalk.net/wp-content/uploads/image11/A-minimalist-silhouette-of-Batman-against-a-dark-background-his-cape-flowing-slightly.jpg"
            alt="Iron Man"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

