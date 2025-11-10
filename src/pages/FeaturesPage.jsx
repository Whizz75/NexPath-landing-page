import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Zap, BarChart3, Users, Briefcase, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  const handleGetStarted = () => {
    const url = import.meta.env.VITE_SIGNUP_URL || "http://localhost:5174/auth/sign-up"
    window.location.href = url
  }

  const coreFeatures = [
    {
      icon: <Zap className="w-7 h-7 text-primary" />,
      title: "Smart Job Matching",
      desc: "NexPath automatically matches candidates with the right roles using skill sets, GPA, and experience, optimizing the recruiting process for both students and companies.",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-primary" />,
      title: "Unified Career Portal",
      desc: "Students, institutions, and employers operate in harmony through a unified dashboard that simplifies recruitment, tracking, and engagement.",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
      title: "Analytics & Insights",
      desc: "Institutions get dashboards showing employment metrics, companies monitor candidate pools, and students receive personalized progress insights.",
    },
    {
      icon: <Users className="w-7 h-7 text-primary" />,
      title: "Collaborative Ecosystem",
      desc: "NexPath fosters collaboration across universities, industries, and students to create a dynamic employment and mentorship ecosystem.",
    },
    {
      icon: <Globe2 className="w-7 h-7 text-primary" />,
      title: "Global Opportunities",
      desc: "Connect with companies, institutions, and recruiters worldwide, expanding possibilities beyond borders.",
    },
  ]

  const placeholderScreenshots = [
    { src: "/admin.png", caption: "Admin Dashboard Overview" },
    { src: "/institute.png", caption: "Institution Management" },
    { src: "/company.png", caption: "Company Job Postings" },
    { src: "/student.png", caption: "Student Interview Schedule" },
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
          Discover What Powers NexPath
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground"
        >
          A connected ecosystem built for students, institutions, and companies — making career growth smarter, faster, and more meaningful.
        </motion.p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {coreFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-4 bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-border/40"
          >
            <div className="flex items-center gap-4">{f.icon}<h3 className="text-xl font-semibold">{f.title}</h3></div>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-24 px-6 bg-muted/30 rounded-lg mx-6 md:mx-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-14"
        >
          See NexPath in Action
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderScreenshots.map((shot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <img src={shot.src} alt={shot.caption} className="w-full h-60 object-cover" />
              <div className="p-4 text-sm text-muted-foreground border-t border-border/40">
                {shot.caption}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-muted-foreground">
          Each role gets its own tailored experience — from analytics dashboards to real-time collaboration panels.
        </p>
      </section>

      <section className="py-28 px-6 bg-card/60 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-8"
        >
          Why Teams Choose NexPath
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Seamless cross-role collaboration",
            "AI-driven matching algorithms",
            "Custom analytics dashboards",
            "Secure Firebase-powered infrastructure",
            "Responsive design for all devices",
            "Scalable architecture for growing institutions",
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <p className="text-muted-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-gradient-to-t from-background via-card to-background rounded-t-3xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6">
          Ready to Experience NexPath?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Empower your journey — whether you're a student, recruiter, or institution — with the platform redefining the future of careers.
        </p>
        <Button
          onClick={handleGetStarted}
          className="bg-primary hover:bg-teal-500 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-teal-500/40 transition-all"
        >
          Get Started
        </Button>
      </section>
    </main>
  )
}
