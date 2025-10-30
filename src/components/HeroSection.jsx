// src/components/HeroSection.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center text-center py-24 space-y-6">
      <h1 className="text-5xl font-bold tracking-tight text-foreground">
        Empower Your <span className="text-primary">Career Journey</span> with NexPath
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        A modern platform connecting students, institutions, and companies for career growth and verified learning experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link to="/register">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link to="/request-access">
          <Button variant="outline" size="lg">
            Request Access
          </Button>
        </Link>
      </div>
    </section>
  );
}
