import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import AboutUsers from "@/components/AboutUsers"
import Articles from "@/components/Articles"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <AboutUsers />
      <Articles />
      <Footer />
    </div>
  )
}
