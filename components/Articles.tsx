"use client"

import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function Articles() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqItems = [
    {
      question: "Skąd mogę wiedzieć, że jestem gejem?",
      answer:
        "Seksualność jest płynna - czasem możesz mieć stuprocentową pewność, że jesteś hetero, nagle jednak okazuje się, że zaczyna Ci się podobać kumpel z drużyny. Nie ma jednoznacznego testu, który pozwoli Ci sprawdzić, czy na pewno jesteś gejem. Jeśli czujesz, że mogą Ci się podobać faceci, umów się z którymś na randkę. Dzięki eksperymentowaniu możesz naprawdę poznać samego siebie.",
    },
    {
      question: "O czym nie mogę zapomnieć przed umieszczeniem gej anonsu?",
      answer:
        "Zanim umieścisz gej anons, zastanów się nad tym, czego tak naprawdę szukasz. Kogoś na pojedyncze spotkanie, czy może na dłużej? Aktywa, czy pasywa? Im więcej szczegółów wymienisz w opisie, tym większe szanse, że trafisz na kogoś, z kim będziesz nadawał na podobnych, seksualnych falach. A kiedy już się umówicie, koniecznie zabierz ze sobą prezerwatywy i lubrykant!",
    },
    {
      question: "Czy gej anonse to dobry sposób na poznawanie nowych osób?",
      answer:
        "Tak! Dzięki gej anonsom możesz poznawać osoby, których nie spotkałbyś w klubie gejowskim czy na ulicy. To naprawdę świetny sposób na poznawanie osób z całej Polski i nie tylko!",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Zalety naszego serwisu</h2>
          <p className="text-xl text-orange-500 font-bold">Gej anonse - dlaczego warto je wybrać?</p>
        </div>

        <div className="space-y-4 mb-16">
          {faqItems.map((item, index) => {
            const isExpanded = expandedItems.includes(index)

            return (
              <div key={index} className="bg-black rounded-lg border border-gray-800 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {isExpanded ? <Minus className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-white mb-4">Polecane kategorie</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">Randki</span>
            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-500 transition-colors cursor-pointer">
              Związki
            </span>
            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-500 transition-colors cursor-pointer">
              Przyjaźń
            </span>
            <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-500 transition-colors cursor-pointer">
              Spotkania
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
