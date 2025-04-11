"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, animate } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  images: string[]
  link: string
  video?: string
  mediaType?: 'image' | 'video'
}

interface ProjectSidePanelProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectSidePanel({ project, onClose }: ProjectSidePanelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
      
    const handleOverlay=(event:any)=>{
        console.log(event.target.className)
        if(!contentRef.current?.contains(event.target) && event.target.className.includes("overlay"))
        {
          onClosePanel()
        }

    }
    window.addEventListener('click',handleOverlay)
    return ()=>{
      window.removeEventListener('click',handleOverlay)
    }
  },[])
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.overscrollBehavior = "contain"
    }
    if(project)
      {
         isSetSidebar(true)
      }
    // Prevent body scrolling when side panel is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "visible"
    }
    
  }, [])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }
  const [isSideBar,isSetSidebar]=useState(false)
  const onClosePanel=()=>{
      isSetSidebar(false)
      setTimeout(()=>{
        onClose()
      },1000)
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSideBar?0:600}}
        exit={{ x:"100%"}}
        transition={{ type: "spring", stiffness: 100, damping: 30 ,duration:10,ease:"linear"}}
        className={`fixed top-0 pt-[var(--header-height)] right-0  w-full sm:w-[40%] h-screen bg-background z-[10001] shadow-lg`}
      >
        <div
          ref={contentRef}
          className="h-[calc(100vh-var(--header-height))] overflow-y-auto overscroll-contain side-panel-scrollbar"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <Button variant="ghost" size="icon" onClick={onClosePanel}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close panel</span>
              </Button>
            </div>

            <div className="relative aspect-video mb-6">
              {project.mediaType === 'video' && project.video ? (      <iframe
                  src={project.video}
                  title={project.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-full h-full rounded-lg"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </>
              )}
            </div>

            <p className="mb-6">{project.description}</p>

            <Button asChild className="w-full">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Site
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

