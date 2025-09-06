import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const affiliateLink = "https://datenow.link/link/3019/69342883"

  const testimonials = [
    {
      name: "Paweł",
      city: "Warszawa",
      text: "Portal świadczący usługi na najwyższym poziomie, z zachowaniem dyskrecji i bezpieczeństwa użytkowników. Szybka reakcja na zgłoszenia i podejmowanie skutecznej interwencji. Jasne zasady zgodne z regulaminem, duża ilość użytkowników.",
      rating: 5,
      photo: "/images/user1.jpg",
    },
    {
      name: "Bartek",
      city: "Katowice",
      text: "Spróbowałem Erogay z ciekawości i nie żałuję. Konto Premium naprawdę daje więcej możliwości, zwłaszcza przy wysyłaniu wiadomości. W Katowicach całkiem sporo osób jest aktywnych, więc nie ma nudy.",
      rating: 5,
      photo:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      name: "Filip",
      city: "Wrocław",
      text: "Portal naprawdę wart uwagi – jasne zasady płatności, żadnych niespodzianek. Cenię sobie dyskrecję i bezpieczeństwo, a tu wszystko jest na serio dopracowane. Polecam!",
      rating: 5,
      photo: "/images/user2.jpg",
    },
    {
      name: "Andrzej",
      city: "Lublin",
      text: "Aplikacja jest całkiem przyjemna w obsłudze. Najbardziej lubię filtrowanie profili według zainteresowań – oszczędza to czas. Dodawanie zdjęć poszło szybko dzięki temu poznałam kilka sympatycznych osób z Lublina.",
      rating: 5,
      photo:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
  ]

  return (
    <section id="opinie" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Opinie naszych użytkowników</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seks randki dla dorosłych Erogay to świetny wybór! Dlaczego?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-orange-500 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.photo || "/images/placeholder-user.jpg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
