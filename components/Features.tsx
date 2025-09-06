"use client"

import { Users, Shield, MessageSquare } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const Features = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Ogromna liczba użytkowników",
      description: "Na żadnym innym portalu erotycznym nie poznasz tak wielu seksownych gejów, co na naszej stronie",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dyskrecja",
      description:
        "Nie martw się, nikt nie musi wiedzieć, że korzystasz z naszego portalu. Twoje dane są z nami bezpieczne! Nie musisz również ustawiać zdjęcia, żeby poznawać seksownych mężczyzn",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Sex chat",
      description:
        "Zanim spotkasz się na randkę z facetem z Twoich snów, możesz z nim popisać, aby mieć pewność, że z pewnością się dogadacie!",
    },
  ]

  const screenshots = [
    { id: 1, src: "/images/screenshots/01.jpg", alt: "Najlepsze zdjęcia - galeria użytkowników" },
    { id: 2, src: "/images/screenshots/02.jpg", alt: "Media - przeglądanie profili" },
    { id: 3, src: "/images/screenshots/03.jpg", alt: "Poszukiwanie - filtry i wyszukiwanie" },
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const imageWidth = scrollContainerRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / imageWidth)
      setCurrentImageIndex(newIndex)
    }
  }

  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      const imageWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: index * imageWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Dlaczego warto nas wybrać?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interesują Cię gejowskie anonse? Sprawdź, dlaczego warto wybrać Erogay jako portal dla gejów!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-800 p-4 rounded-full group-hover:bg-orange-500 transition-all duration-300">
                  <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
            Najlepsze gej anonse - <span className="text-orange-500">pan szuka pana!</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center lg:items-start">
              <div
                ref={scrollContainerRef}
                className="w-48 h-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex">
                  {screenshots.map((screenshot) => (
                    <div key={screenshot.id} className="flex-shrink-0 w-48 snap-center">
                      <img
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        className="w-full h-auto rounded-xl object-cover shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? "bg-orange-500 scale-110" : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Przejdź do zdjęcia ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-gray-300 leading-snug space-y-6 flex flex-col justify-center">
              <p className="text-xl font-medium text-center leading-snug">
                Pan szuka pana - ile razy wpisywałeś to hasło w wyszukiwarkę, licząc, że trafisz na stronę, na której
                znajdziesz ogrom erotycznych, gejowskich anonsów umieszczonych przez facetów Twoich marzeń? Dzięki nam
                nie musisz dłużej szukać!
              </p>
              <p className="text-xl font-medium text-center leading-snug">
                Na Erogay swoje konta mają tysiące gejów z całej Polski, którzy podobnie jak Ty, marzą o znalezieniu
                kogoś na jedną noc lub do dłuższej relacji. Chyba nie chcesz, żeby czekali na Ciebie jeszcze dłużej,
                prawda?
              </p>
              <p className="text-xl font-medium text-center leading-snug">
                Zarejestruj się na Erogay i poznawaj naprawdę gorących facetów już dzisiaj!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
