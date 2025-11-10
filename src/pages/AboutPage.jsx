import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const team = [
    { name: "Harry Nts'ekhe", role: "System Designer & Architect", img: "/team/senior.jpg" },
    { name: "Mohau Qoane", role: "Frontend Designer & Developer", img: "/team/mianca.jpg" },
    { name: "Motlatsi Mohami", role: "Database Administrator & Designer", img: "/team/backend.jpg" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative py-32 px-6 text-center bg-gradient-to-b from-background via-card to-background">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-teal-400 mb-6"
        >
          Building the Future of Career Discovery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground"
        >
          At NexPath, we’re reimagining how talent, education, and opportunity connect — 
          empowering every learner to unlock their full potential through technology, mentorship, 
          and data-driven insights.
        </motion.p>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-6">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NexPath exists to close the gap between education and employment. 
            We help institutions nurture employable graduates, companies find 
            perfectly matched talent, and students discover opportunities aligned 
            with their strengths.
          </p>
          <p className="text-muted-foreground text-lg mt-4">
            Through AI-powered matching, real-time analytics, and integrated mentorship, 
            we make the career journey transparent, empowering, and future-ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg border border-border/40"
        >
          <img
            src="/mission.jpeg"
            alt="Mission"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-card/50 rounded-lg mx-6 md:mx-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-teal-400 mb-6"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          We envision a world where every student’s path to success is powered by 
          intelligence, not luck — where education and employment are connected 
          seamlessly, and growth opportunities are accessible to all.
        </motion.p>
      </section>

      <section className="py-32 px-6 text-center max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-16"
        >
          Meet the Team Behind NexPath
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl border-2 border-teal-300/50 mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30 rounded-t-3xl text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Innovation",
              desc: "We believe in constant evolution — transforming traditional education and recruitment with smart, scalable technologies.",
            },
            {
              title: "Empowerment",
              desc: "Every feature is designed to empower learners, institutions, and companies to make better, data-driven decisions.",
            },
            {
              title: "Transparency",
              desc: "We value openness — providing clarity in the career journey for all parties involved.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-md border border-border/40 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-teal-400">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6 text-center bg-gradient-to-t from-background via-card to-background">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-6"
        >
          Join the NexPath Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Whether you’re an innovator, educator, or employer — we’re building 
          something extraordinary. Let’s redefine the future of education and employment together.
        </motion.p>

        <Button
          onClick={() => (window.location.href = "https://nexpath-app.onrender.com")}
          className="bg-primary hover:bg-teal-500 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-teal-500/40 transition-all"
        >
          Get Started
        </Button>
      </section>
    </main>
  )
}
