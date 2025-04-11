import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import About from "./components/About"
import { GET } from "./api/screenshot/route"

export default async function Home() {

  const image=await (await GET()).json()
  

  return (
    <main className="min-h-screen bg-background  text-foreground">
      <Hero />
      <Projects {...{image}}/>
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

