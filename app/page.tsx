import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StructuredData from "./components/StructuredData";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
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
  );
}
