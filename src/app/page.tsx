import AboutMe from "@/components/about/AboutMe";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
       <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
