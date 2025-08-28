import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="flex items-center relative overflow-hidden pt-4 lg:pt-8 pb-8 lg:pb-12">
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 fade-in">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Anup Singh</span>
              </h1>
              <p className="text-2xl text-muted-foreground mt-4">Frontend Developer</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building responsive, user-friendly web experiences with modern technologies. 
              Passionate about creating interactive applications and AI-powered solutions.
            </p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <Button
                onClick={scrollToContact}
                data-testid="button-contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                data-testid="button-resume"
                className="border border-border bg-card text-card-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-4 lg:space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@anupsingh.dev"
                data-testid="link-email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative floating-animation">
              <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 border-8 border-card shadow-2xl flex items-center justify-center">
                <div className="text-6xl text-primary">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
