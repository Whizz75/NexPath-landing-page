import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const handleGetStarted = () => {
    const url = import.meta.env.VITE_SIGNUP_URL || "http://localhost:5174/auth/sign-up"
    window.location.href = url
  }

  const handleRequestAccess = () => {
    const url = import.meta.env.VITE_REQUEST_ACCESS_URL || "http://localhost:5174/auth/request-access"
    window.location.href = url
  }

  return (
    <section className="bg-background text-slate-100 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        className="text-5xl font-bold mb-4 max-w-2xl text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empowering Students, Institutions & Employers in Lesotho
      </motion.h1>

      <motion.p
        className="text-slate-300 max-w-xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover opportunities, connect with institutions, and bridge the gap
        between education and employment — all in one integrated platform.
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button
          onClick={handleGetStarted}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 shadow-lg shadow-teal-500/40"
        >
          Get Started
        </Button>

        <Button
          onClick={handleRequestAccess}
          variant="outline"
          className="border-teal-500 text-teal-400 hover:bg-teal-700/30 px-6 py-3"
        >
          Request Access
        </Button>
      </motion.div>
    </section>
  )
}
