import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <CTASection />
      <Footer />
    </div>
  )
}
