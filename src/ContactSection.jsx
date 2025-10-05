import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  // Main Refs
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const initialTextRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Kill any existing triggers for this section (safe for StrictMode)
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars && st.vars.trigger === sectionRef.current) st.kill(true)
    })

    // Set initial states (also set transformOrigin so scaling is centered)
    gsap.set(circleRef.current, {
      scale: 1,
      backgroundColor: "white",
      transformOrigin: "center center",
    })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Zoom phase 1: expand & fade out initial text (start together)
    tl.to(circleRef.current, {
      scale: 5,
      backgroundColor: "#9333EA",
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        initialTextRef.current,
        { opacity: 0, ease: "power1.out", duration: 0.3 },
        "<"
      )

      // Zoom phase 2: expand more
      .to(circleRef.current, {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
        ease: "power2.inOut",
        duration: 0.8,
      })

      // Fade in final text slightly before zoom finishes
      .to(
        finalTextRef.current,
        { opacity: 1, ease: "power2.inOut", duration: 0.5 },
        "-=0.3"
      )

    // Cleanup on unmount
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      gsap.killTweensOf([
        circleRef.current,
        initialTextRef.current,
        finalTextRef.current,
      ])
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-black overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Circle (only initial text lives inside) */}
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full
                   flex items-center justify-center relative transition-shadow duration-1000
                   shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
      >
        {/* initial text */}
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl flex items-center text-center m-0"
        >
          SCROLL DOWN
        </p>
      </div>

      {/* final text moved OUTSIDE the circle so it's not affected by circle scaling */}
      <div
        ref={finalTextRef}
        className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
      >
        <div className="pointer-events-auto text-center max-w-4xl px-6">
          <h1 className="text-black text-3xl md:text-6xl font-bold leading-tight mb-4">
            Step Into the future with Arshad
          </h1>

          <p className="text-black text-sm md:text-base mb-4">
            Front-end developer specialized n crafting modern, responsive web
            interfaces using React, Tailwnd CSS, and advanced UI animation
            techniques. Focused on clean code, and pixel-perfect design that
            stand out.
          </p>

          <button className="mt-4 px-8 py-2 rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all duration-500">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
