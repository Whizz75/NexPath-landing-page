import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 opacity-50"
        animate={{ x: ["0%", "50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-white px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Join the NexPath Network Today
        </h2>
        <p className="text-lg md:text-xl mb-10 text-slate-100">
          Whether you’re a student, institution, or company, NexPath bridges the gap between
          education and employment for a brighter future in Lesotho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-teal-700 hover:bg-slate-100 shadow-lg shadow-teal-500/30"
            onClick={() => window.open("http://localhost:5174/auth/sign-up", "_blank")}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-teal-700 shadow-lg shadow-teal-500/20"
            onClick={() => window.open("http://localhost:5174/request-access", "_blank")}
          >
            Request Access
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
