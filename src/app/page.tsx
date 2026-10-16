import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ResumeViewer from "@/components/ResumeViewer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";
import SocialSidebars from "@/components/SocialSidebars";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <SocialSidebars />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <ResumeViewer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
