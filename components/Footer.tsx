import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <span className="text-3xl font-extrabold">
                <span className="text-orange-500">ero</span>
                <span className="text-white">gay.pl</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Największy w Polsce portal randkowy dla mężczyzn poszukujących mężczyzn. Tworzymy bezpieczne środowisko do
              poznawania nowych ludzi i budowania trwałych relacji.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Szybkie linki</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Funkcje
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Pomoc
                </a>
              </li>
            </ul>
          </div>

          {/* Recommended Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Polecane kategorie</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex randki
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex fotka
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Czat erotyczny
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Portal dla swingersów
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex kamerki
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Gej sex randki
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex trójkąt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Gej anonse
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  BDSM randki
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Sex spotkania
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Portal flirt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Anonse erotyczne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                  Zdjęcia erotyczne
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 erogay.pl. Wszystkie prawa zastrzeżone.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Regulamin
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Prywatność
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
