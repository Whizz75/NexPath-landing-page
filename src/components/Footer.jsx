// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t py-6 mt-10 bg-background">
      <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} NexPath. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#features" className="hover:text-primary">
            Features
          </a>
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
