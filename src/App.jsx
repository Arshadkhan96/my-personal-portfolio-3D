import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import AboutSection from "./components/AboutSection"
import CustomCursor from "./components/CustomCursor"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import ProgressBar from "./ProgressBar"



export default function App() {

  useEffect(()=>{
    //Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    //Refresh ScrollTrigger when the page fully Loaded
    ScrollTrigger.refresh()

    //Clean up ScrollTrigger on component unmount

    return()=>{
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill())
    }
  },[])

  return (
    <>
    <Header/>
    <HeroSection/>
    <CustomCursor/>
    <AboutSection/>
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
    <ProgressBar/>
    </>
  )
}