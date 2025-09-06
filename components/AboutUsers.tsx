import { MapPin } from "lucide-react"

const AboutUsers = () => {
  const affiliateLink = "https://datenow.link/link/3019/69342883"

  const cities = [
    "Warszawa",
    "Kraków",
    "Łódź",
    "Wrocław",
    "Poznań",
    "Gdańsk",
    "Katowice",
    "Bydgoszcz",
    "Szczecin",
    "Lublin",
    "Toruń",
    "Białystok",
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Jakich gejów możesz poznać section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Jakich gejów możesz poznać na <span className="text-orange-500">Erogay</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-bold">
            Liczba użytkowników Erogay jest naprawdę duża i nieustannie rośnie
          </p>

          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4 mb-12 font-bold">
            <p>
              Ilość użytkowników Erogay jest tak duża, że możesz tu poznać naprawdę różnych gejów! Umów się na sex
              randkę z przegiętym fanem obcisłych ciuszków, który zaskoczy Cię w łóżku tym, że momentalnie Cię
              zdominuje.
            </p>
            <p>
              Spotkaj się z facetem w typie miśka, z którym przetańczysz do białego rana w klubie gejowskim, a po
              wszystkim zjecie wspólne, romantyczne śniadanie. Poznawaj ostrych facetów kochających BDSM i niepewnych,
              młodych mężczyzn, których będziesz mógł nauczyć wszystkiego, co wiesz o gejowskim seksie.
            </p>
            <p>
              Na Erogay nie będziesz się nudzić! Dzięki naszemu portalowi możesz codziennie czatować z kimś innym. Już
              nigdy nie będziesz narzekać na to, że wszyscy w Twojej okolicy są hetero.
            </p>
          </div>

          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block mb-4"
          >
            Czytaj więcej
          </a>
        </div>

        {/* Sex randki w każdym mieście section */}
        <div className="border-t border-gray-700 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Sex randki w każdym mieście w Polsce
            </h3>
            <p className="text-xl text-gray-300">Poznaj singli w każdym polskim mieście</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <a
                key={index}
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-orange-500 text-gray-300 hover:text-white px-4 py-3 rounded-lg text-center transition-all duration-200 border border-gray-700 hover:border-orange-500 group font-bold"
              >
                <MapPin className="h-4 w-4 inline-block mr-2 group-hover:text-white" />
                Randki {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsers
