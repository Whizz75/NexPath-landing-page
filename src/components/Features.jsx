import { motion } from "framer-motion"
import { User, Book, Globe } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <User size={28} className="text-teal-400" />,
      title: "Discover Institutions",
      desc: "Browse accredited higher learning institutions across Lesotho and explore available courses.",
    },
    {
      icon: <Book size={28} className="text-teal-400" />,
      title: "Simplified Applications",
      desc: "Apply online for your preferred programs — with real-time admission status updates.",
    },
    {
      icon: <Globe size={28} className="text-teal-400" />,
      title: "Career Placement",
      desc: "Graduates can upload transcripts and connect directly with partner companies for employment opportunities.",
    },
  ]

  return (
    <section className="relative bg-background text-slate-100 py-20 px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 opacity-20"
        animate={{ x: ["0%", "50%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl font-semibold mb-12 text-teal-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What You Can Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-300 cursor-pointer relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-teal-400">{f.title}</h3>
              <p className="text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
