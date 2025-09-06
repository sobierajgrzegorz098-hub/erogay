"use client"

import { useState, useEffect } from "react"

export default function FloatingRegisterButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2")
      const targetHeading = Array.from(headings).find((h) => h.textContent?.includes("Dlaczego warto nas wybrać"))

      if (targetHeading) {
        const rect = targetHeading.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0
        setIsVisible(isInView)
      }
    }

    // Check initial scroll position
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.open("https://datenow.network/link/3019/69342883", "_blank")
  }

  return (
    <div
      className={`fixed bottom-12 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-extrabold text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[210px] sm:min-w-[250px]"
        style={{
          fontFamily:
            '-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif"',
        }}
      >
        Zarejestruj się
      </button>
    </div>
  )
}
