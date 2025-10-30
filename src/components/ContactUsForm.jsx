// src/components/ContactUsForm.jsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsForm() {
  return (
    <section id="contact" className="container py-20 space-y-6">
      <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <Input placeholder="Your Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Textarea placeholder="Your Message" rows={5} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
