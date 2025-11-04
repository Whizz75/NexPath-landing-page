import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStarted = () => {
    const hostedUrl = import.meta.env.VITE_SIGNUP_URL || "http://localhost:5174/auth/sign-up"
    window.location.href = hostedUrl
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-slate-100">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="NexPath Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold tracking-wide text-teal-400">
            NexPath
          </h1>
        </div>

        {/* Centered Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
            >
              {name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={handleGetStarted}
            className="bg-teal-500 hover:bg-teal-600 text-white shadow-md shadow-teal-500/30"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border py-4 px-6 flex flex-col gap-4 text-slate-200">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
            >
              {name}
            </a>
          ))}
          <Button
            onClick={handleGetStarted}
            className="bg-teal-500 hover:bg-teal-600 text-white w-full shadow-sm"
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  )
}
