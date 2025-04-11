"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import ProjectSidePanel from "./ProjectSidePanel"
import OYM from '../../public/images/oym.png'
import roc from '../../public/images/roc.png'
import orrekie from '../../public/images/orrekie.png'
import oma from '../../public/images/oma.png'
interface Project {
  id: number
  title: string
  description: string
  images: string[]
  link: string
  video?: string  // Optional video URL
  mediaType?: 'image' | 'video'  // Type of media to display
}

const projects: Project[] = [
  {
    id: 1,
    title: "ROC",
    description:
      "​ROC: The Jersey App, accessible at roc.je, is a dynamic platform designed to help both locals and visitors immerse themselves in the best of Jersey.the app serves as a comprehensive guide to the island's activities and events.",
    images: [
      roc.src,
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    link: "https://www.roc.je/",
    video: "https://www.youtube.com/embed/UElv9KpBYZU?si=s6w51Xvz_WlFZR2x",
    mediaType: 'video'
  },
  {
    id: 2,
    title: "Optimize Your Marketing",
    description:
      "OYM App is essentially a centralized analytics dashboard that pulls in marketing data from major platforms like Google, Facebook, TikTok, YouTube, LinkedIn, and possibly others. That makes it super useful for digital marketers or agencies who want to track performance across multiple ad platforms in one place.",
    images: [
      OYM.src,
    ],
    link: "https://oym-app.vercel.app/",
    mediaType: 'image'
  },
  {
    id: 3,
    title: "Orrekie",
    description: "I developed the Orrekie web app, a content-driven platform aimed at professionals in the Architecture, Engineering, and Construction (AEC) industry. The app delivers insights on project information management, automation tools, and productivity strategies. Built with a clean, user-friendly interface, it enhances Orrekie’s mission to streamline AEC workflows through accessible digital content"
,
    images: [
      orrekie.src,
    ],
    link: "https://amazing-insight-415210-staging.web.app/",
    mediaType: 'image'
  },
  {
    id: 4,
    title: "Olivier Mythodrama",
    description: `Developed and maintained the front-end of Olivier Mythodrama’s leadership development platform using React.js and Next.js

Translated the Mythodrama methodology into interactive and engaging digital experiences for a global user base across 40+ countries.

Built responsive, accessible UI components aligned with performance psychology and executive education goals.

Collaborated with cross-functional teams to deliver a high-impact learning experience for clients including Coca-Cola, HSBC, FedEx, Mercedes-Benz, and the United Nations.

Ensured performance optimization and scalability for a platform used by world-renowned institutions like Harvard Business School and the World Economic Forum.`
,
    images: [
      oma.src,
    ],
    link: "https://www.oliviermythodrama.com",
    mediaType: 'image'
  },
]

export default function Projects({image}:{image:string}) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef)
  const [containerWidth, setContainerWidth] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)


  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (inView) {
      setHasTriggered(true)
    }
  }, [inView])
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        const firstCard = containerRef.current.querySelector(".project-card")
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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 overflow-hidden relative" ref={containerRef}>
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
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
            x: [-cardWidth, -(cardWidth * projects.length)],
            transition: {
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            },
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              variants={cardVariants}
              className="project-card relative flex-shrink-0 w-72 h-48 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Card className="h-full bg-secondary/50 border-primary/50 transition-colors duration-300 overflow-hidden hover:bg-secondary/70">
                <CardHeader className="p-4">
                  <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.mediaType === 'video' && project.video ? (
                    <iframe
                 
                      src={project.video}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin" 
                    />
                  ) : (
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="overflow-hidden w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {selectedProject && (
        <>
          <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-[10000]"  />
          <ProjectSidePanel project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
      )}
    </section>
  )
}

