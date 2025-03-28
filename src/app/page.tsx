"use client";
import Image from "next/image";
import NavBar from "@/components/Created/NavBar";
import AboutMe from "@/components/Created/AboutMe";
import Experience from "@/components/Created/Experience";
import Projects from "@/components/Created/Projects";
import Skills from "@/components/Created/Skills";
import ContactMe from "@/components/Created/ContactMe";
import Footer from "@/components/Created/Footer";

export default function Home() {
  return (
    <>
      <div className="lg:container">
        <NavBar />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
