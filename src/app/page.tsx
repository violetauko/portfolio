import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="">
     <Header/>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}
