"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { id: 1, name: "React", level: "Advanced" },
  { id: 2, name: "Next.js", level: "Advanced" },
  { id: 3, name: "TypeScript", level: "Intermediate" },
  { id: 4, name: "Node.js", level: "Intermediate" },
  { id: 5, name: "Java", level: "Advanced" },
  { id: 6, name: "CSS/Sass", level: "Advanced" },
  { id: 7, name: "Tailwind CSS", level: "Advanced" },
  { id: 8, name: "JavaScript", level: "Advanced" },
  { id: 9, name: "Git", level: "Intermediate" },
  { id: 10, name: "REST APIs", level: "Advanced" },
]

export default function Skills() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef)
  const [containerWidth, setContainerWidth] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  
 
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        const firstCard = containerRef.current.querySelector(".skill-card")
        if (firstCard instanceof HTMLElement) {
          setCardWidth(firstCard.offsetWidth)
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  console.log(cardWidth)

  return (
    <section id="skills" className="py-20 px-4 md:px-6 overflow-hidden" ref={containerRef}>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <motion.div
        className="flex space-x-4 pb-4 overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="flex space-x-4"
          animate={{
            x: [-cardWidth, -(cardWidth * skills.length)],
            transition: {
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.id}-${index}`}
              variants={cardVariants}
              className="skill-card relative flex-shrink-0 w-48 h-24"
            >
              <Card className="h-full bg-secondary/50 border-primary/50 transition-colors duration-300 overflow-hidden">
                <CardContent className="p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-lg font-semibold text-primary">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

