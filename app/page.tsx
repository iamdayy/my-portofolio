import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkProcess from './components/WorkProcess'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <WorkProcess />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

