import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Genie AI Chatbot",
      description: "A multipurpose AI chatbot with real-time data, memory, history, voice features, and dark/light mode support.",
      image: "🤖",
      technologies: ["React", "AI/ML", "Node.js"],
      demoUrl: "https://chatwithgenie.netlify.app",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS, featuring responsive design and smooth animations.",
      image: "💼",
      technologies: ["React", "Tailwind", "Responsive"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "MongoDB", "Express"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've mastered
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover" data-testid={`project-card-${index}`}>
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <CardContent className="p-6">
                <h3 
                  className="text-xl font-bold text-foreground mb-2"
                  data-testid={`project-title-${index}`}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-muted-foreground mb-4"
                  data-testid={`project-description-${index}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-demo-${index}`}
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-github-${index}`}
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
