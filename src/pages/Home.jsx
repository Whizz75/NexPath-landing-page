// src/pages/Home.jsx
import React from "react"
import Hero from "../components/Hero"
import Features from "../components/Features"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="cta"><CTASection /></section>
    </main>
  )
}
