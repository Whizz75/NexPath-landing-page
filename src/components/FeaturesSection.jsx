// src/components/FeaturesSection.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users2, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Users2 className="h-6 w-6 text-primary" />,
    title: "Student-First Experience",
    description:
      "Seamless onboarding and verified academic profiles by default.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Secure & Trusted",
    description:
      "End-to-end security ensures data privacy for institutions and learners.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Analytics Ready",
    description:
      "Institutions gain insights into engagement, progress, and outcomes.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: "Effortless Verification",
    description:
      "Instant credential validation powered by NexPath’s verified network.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container py-20 space-y-10">
      <h2 className="text-3xl font-semibold text-center">Key Features</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {f.icon}
                {f.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {f.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
