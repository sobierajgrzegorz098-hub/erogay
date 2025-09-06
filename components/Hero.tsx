import { Users, MessageCircle, Heart } from "lucide-react"

const Hero = () => {
  const affiliateLink = "https://datenow.link/link/3019/69342883"

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
        marginTop: "-80px",
        paddingTop: "100px",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            style={{
              fontFamily:
                '-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif"',
            }}
          >
            Znajdź swoją
            {/* Fixed contrast by using solid orange color instead of gradient */}
            <span className="text-orange-500"> drugą połówkę</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Największy w Polsce portal randkowy dla mężczyzn poszukujących mężczyzn. Poznaj ciekawych ludzi, nawiąż
            przyjaźnie i znajdź miłość swojego życia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-center"
            >
              Dołącz za darmo
            </a>
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-extrabold hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-600 inline-block text-center"
              style={{
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif"',
              }}
            >
              Dowiedz się więcej
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">50,000+</h3>
              <p className="text-gray-400">Aktywnych użytkowników</p>
            </div>

            <div className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-500/20 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">15,000+</h3>
              <p className="text-gray-400">Par utworzonych</p>
            </div>

            <div className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-orange-600/20 p-3 rounded-full">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">1M+</h3>
              <p className="text-gray-400">Wiadomości dziennie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
